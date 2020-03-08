import React from "react";
import "./index.scss";
const index = () => {
  return (
    <div className="landing__main">
      <h2>Welcome to PayPay Performance Review System</h2>
      <main>
        <article className="landing__article">
          <p>
            Please click here to Login. Your details are registered in the
            system. Please check your mail for your credentials. If you haven't
            recevied the credentails, contact admin@paypayreview.com.
          </p>
          <h3>What you should do?</h3>
          <p>
            When you login, you will be able to see the pending performance
            review. You performance will be measured on two parameters -
            Achievements and Innvotaion. Please feel free to add as much
            information you want. Also you will see the pending feedbacks which
            you need to provide to other user on their performance.
          </p>
        </article>
      </main>
    </div>
  );
};

export default index;
