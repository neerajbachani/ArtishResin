import React from 'react';

const RefundAndCancellation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">Refund and Cancellation Policy</h1>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {policyItems.map((item, index) => (
            <div key={index} className="p-6 border-b border-gray-200 last:border-b-0">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">{item.title}</h2>
              <p className="text-gray-700 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const policyItems = [
  {
    title: "No Returns, No Exchange, and No Cancellations Policy",
    content: "Artish Isha online store does not provide the option to refund or exchange the product once purchased. The exact size and color are mentioned to avoid the need to exchange the product, so check images and read the description before purchasing. Furthermore, the Quality Check team checks each product to ensure it does not have any defects. However, in case of any manufacturing defect, damaged item in transit, or missing item in order, you can register a complaint within 48 hours by sending us an email at artishisha@gmail.com. To be eligible for a refund, you are required to record a video of opening the package to prove that you received an already defective product. Do share your order number along with the unboxing video. The team will respond to the complaint query within 2-5 working days and get in touch with you. If you are eligible for the refund or replacement, the team will communicate with you and take the necessary steps."
  },
  {
    title: "Wrong Delivery Status",
    content: "In case the delivery status shows 'delivered' and you have not received the product yet, you need to inform us within 24 hours. You are requested to send an email with your order id with the subject 'wrong delivery status' to artishisha@gmail.com. Failing to do so within 24 hours doesn't make you entitled to any refund or any support from our team."
  },
  {
    title: "RTO (Return) Due to Customer Mistake",
    content: "If a shipment is returned due to mistake or negligence on the customer's part—such as providing an incorrect or incomplete address, incorrect contact information, failing to answer calls from the courier and from the vendor (Artish Isha) or not being available to accept delivery, etc.—the customer will be responsible for bearing RTO charges and reshipment charges of the parcel. (Cancellation of order will not be entertained in such cases.)"
  },
  {
    title: "Refund Processing",
    content: "If you do not receive the refund amount in the time duration mentioned, you can check your bank account again or contact the bank as the processing may take some time from their end. Or else, you can contact us at artishisha1@gmail.com. The shipping charges are non-refundable."
  },
  {
    title: "Custom Products",
    content: "Refund or cancellation of CUSTOM PRODUCTS are not entertained."
  }
];

export default RefundAndCancellation;