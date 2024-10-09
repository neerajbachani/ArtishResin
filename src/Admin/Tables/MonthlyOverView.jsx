import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd';
import DotsVertical from 'mdi-material-ui/DotsVertical';
import CellphoneLink from 'mdi-material-ui/CellphoneLink';
import AccountOutline from 'mdi-material-ui/AccountOutline';
import { getAllUsers } from '../../user/redux/Auth/Action';
import { findProducts } from '../../user/redux/Product/Action';

// Custom hook to manage data fetching and processing
const useOverviewData = () => {
  const dispatch = useDispatch();
  const { adminOrder, auth, product } = useSelector((store) => store);
  const [overviewData, setOverviewData] = useState(null);
  const fetchData = useCallback(() => {
    dispatch(getAllUsers());
    dispatch(findProducts({}));
  }, [dispatch , auth.users]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [fetchData]);

  useEffect(() => {
    const completedOrders = adminOrder.orders?.filter(
      (order) => order.paymentDetails?.paymentStatus === 'COMPLETED'
    ) || [];
    
    const totalSales = completedOrders.reduce((sum, order) => sum + order.totalPrice, 0);
    const customerCount = auth.users?.length || 0;
    const productCount = product.products.totalProducts || 0;

    setOverviewData({
      totalSales,
      customerCount,
      productCount,
      monthlyGrowth: calculateMonthlyGrowth(completedOrders)
    });
  }, [adminOrder.orders, auth.users, product.products]);

  return overviewData;
};

const calculateMonthlyGrowth = (orders) => {
  // Implement your logic to calculate monthly growth
  return '5.2%';
};

const MonthlyOverview = () => {
  const overviewData = useOverviewData();

  const salesData = useMemo(() => {
    if (!overviewData) return [];

    return [
      {
        stats: `$${overviewData.totalSales.toLocaleString()}`,
        title: 'Sales',
        color: 'primary',
        icon: <CurrencyUsd sx={{ fontSize: '1.75rem' }} />
      },
      {
        stats: overviewData.customerCount.toLocaleString(),
        title: 'Customers',
        color: 'success',
        icon: <AccountOutline sx={{ fontSize: '1.75rem' }} />
      },
      {
        stats: overviewData.productCount.toLocaleString(),
        title: 'Products',
        color: 'warning',
        icon: <CellphoneLink sx={{ fontSize: '1.75rem' }} />
      },
    ];
  }, [overviewData]);

  const renderStats = () => {
    return salesData.map((item, index) => (
      <Grid item xs={12} sm={4} key={index}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            variant='rounded'
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: 'common.white',
              backgroundColor: `${item.color}.main`
            }}
          >
            {item.icon}
          </Avatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption'>{item.title}</Typography>
            <Typography variant='h6'>{item.stats}</Typography>
          </Box>
        </Box>
      </Grid>
    ));
  };

  if (!overviewData) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardHeader
        title='Real-Time Overview'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
              Total {overviewData.monthlyGrowth} growth
            </Box>{' '}
            this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverview;