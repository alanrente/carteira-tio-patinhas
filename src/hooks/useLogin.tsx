export function useLogin() {
  const onFinish = (values: any) => {
    console.log("Success:", values);

    localStorage.setItem("token", JSON.stringify({ auth: true }));

    window.location.assign("/");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return { onFinish, onFinishFailed };
}
