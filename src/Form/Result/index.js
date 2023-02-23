const Result = ({ result }) => (
    <p className="form__labelResult">
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}
                zł ={" "}
                {result.targetResult.toFixed(2)}
                {result.currency}
            </>
        )}
    </p>
)

export default Result