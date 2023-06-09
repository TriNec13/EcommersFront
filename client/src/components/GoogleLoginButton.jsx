import React from "react";

const GoogleLoginButton = ({ className, children }) => {
  const handleGoogleSignIn = () => {
    window.location.href = "https://ecommersback-production.up.railway.app/auth/google";
  };

  return (
    <button className={className} onClick={handleGoogleSignIn}>
      {children}
    </button>
  );
};

export default GoogleLoginButton;
