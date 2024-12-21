import React from "react";

const ProfilePage = () => {
  // Dummy data
  const user = {
    "username": "adminsdafas",
      "email": "test@gmail.com",
      "password": "$2b$12$xanTiUget5JJZpcl5lfJ6uDTW7kHdFx/uMRDRvc7OyQwU920dguRS",
      "phone": "0183456789",
      "city": "Jamshedpur",
      "state": "NY",
      "college": "National Institute of Technology Jamshedpur",
      "gender": "male",
      "graduationYear": "2032",
      "isNITJSR": true,
      "orderId": "order_PYz4uylQB8jZUy",
      "status": "success",
      "paymentId": "pay_PYz5BtSMSrNeUp",  
  };

  const handlePayment = () => {
    // Add your payment logic here
    console.log("Payment initiated...");
  };
  

  return (
    <div className="flex items-center justify-center h-screen"  style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "5vh",
      backgroundColor: "rgb(2 2 33)",
      minHeight: "100vh",
      backgroundImage: "url('/andy-holmes-rCbdp8VCYhQ-unsplash.jpg')",
    }}>
       <div className="text-center mb-6">
        <h2 className="md-8 z-10 pb-8 text-center font-AnotherFont text-8xl text-red-500 drop-shadow-sm">User Profile</h2>
      </div>
    <div className="p-6 w-full max-w-lg bg-transparent shadow-lg rounded-lg ">
     
      <div className=" grid gap-5 text-2xl text-yellow-300">
        <p>
        <span className="font-semibold text-gray-200">Name:</span> {user.username}
      </p>
      <p>
        <span className="font-semibold text-gray-200">Email:</span> {user.email}
      </p>
      <p>
        <span className="font-semibold text-gray-200">Phone:</span> {user.phone}
      </p>
      <p>
        <span className="font-semibold text-gray-200">City:</span> {user.city}
      </p>
      <p>
        <span className="font-semibold text-gray-200">State:</span> {user.state}
      </p>
      <p>
        <span className="font-semibold text-gray-200">College:</span> {user.college}
      </p>
      <p>
        <span className="font-semibold text-gray-200">Gender:</span> {user.gender}
      </p>
      <p>
        <span className="font-semibold text-gray-200">Graduation Year:</span> {user.graduationYear}
      </p>
      <p>
        <span className="font-semibold text-gray-200">NITJSR:</span> {user.isNITJSR ? "Yes" : "No"}
      </p>
      {user.status === "success" ? (
      <> <p>
            <span className="font-semibold text-gray-200">Order ID:</span> {user.orderId}
          </p>
          <p>
            <span className="font-semibold text-gray-200">Payment ID:</span> {user.paymentId}
          </p></>
      ) : (
        <div className="text-center">
          <p className="mb-4 text-white">Payment is pending. Please proceed to complete the payment.</p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            onClick={handlePayment} // Function to trigger payment
          >
            Proceed to Payment
          </button>
        </div> )}
        </div>
      
    </div>
  </div>
  
  )}

export default ProfilePage;
