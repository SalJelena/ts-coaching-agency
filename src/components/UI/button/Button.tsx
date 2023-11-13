import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: 'button';
  disabled: boolean;
} & ComponentPropsWithoutRef<'button'>

type LinkProps = {
  el: 'link';
  disabled: boolean;
} & ComponentPropsWithoutRef<'a'>

function Button(props: ButtonProps | LinkProps) {

  if (props.el === 'link') {
    return (
      <a {...props} className="button"></a>
    )
  }

  return (
    <button {...props} className={props.disabled ? `button` : `button button--disabled`}></button>
  )
}

export default Button