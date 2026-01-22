import type { CSSProperties, FormHTMLAttributes, ReactNode } from 'react';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  onFinish?: (values: any) => void;
  initialValues?: Record<string, any>;
}

export interface FormItemProps {
  className?: string;
  style?: CSSProperties;
  label?: ReactNode;
  name?: string;
  children?: ReactNode;
}
