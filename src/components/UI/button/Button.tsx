import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: 'button';
} & ComponentPropsWithoutRef<'button'>

type LinkProps = {
  el: 'link';
} & ComponentPropsWithoutRef<'a'>

function Button(props: ButtonProps | LinkProps) {

  if (props.el === 'link') {
    return (
      <a {...props} className="button"></a>
    )
  }

  return (
    <button {...props} className="button"></button>
  )
}

export default Button