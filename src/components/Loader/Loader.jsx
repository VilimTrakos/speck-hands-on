import { Dna } from 'react-loader-spinner';

const LoaderWrapper = ({ loading }) => {
    return (
        <div className="loader-wrapper">
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    );
};
