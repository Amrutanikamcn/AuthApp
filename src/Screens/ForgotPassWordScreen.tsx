import ForgotPassword from '../commpoents/ForgotPassword/ForgotPassWord';

const ForgotPasswordScreen = () => {
  return (
    <ForgotPassword
      isMobile={false}
      onResetPress={input => console.log('Reset input:', input)}
      onBackPress={() => console.log('Back pressed')}
      headerTitle="Reset Your Password"
      subtitle="We will send you a password reset link."
      buttonText="Submit"
      backButtonText="Go Back"
    />
  );
};

export default ForgotPasswordScreen;
