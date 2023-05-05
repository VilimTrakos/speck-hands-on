import { Dna } from "react-loader-spinner";
import { Loader as Loaderwrapper } from "./LoaderStyle";

const Loader = ({ loading }) => {
  return (
    <Loaderwrapper>
      <Dna
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </Loaderwrapper>
  );
};
export default Loader;
