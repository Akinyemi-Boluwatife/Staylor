import { Input } from "./ui/input";

function InputFile({ className, ...rest }) {
  return <Input placeholder="search" className={className} {...rest} />;
}

export default InputFile;
