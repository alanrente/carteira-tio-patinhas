import { Alert, AlertProps } from "antd";

type AntdAlertProps = {
  args: AlertProps;
  cb: () => void;
};

export function AntdAlert({ args, cb }: AntdAlertProps) {
  cb();

  return (
    <Alert
      style={{
        position: "absolute",
        top: "15px",
        right: "15px",
      }}
      message={args.message}
      description={args.description}
      type={args.type}
      showIcon={args.showIcon}
    />
  );
}
