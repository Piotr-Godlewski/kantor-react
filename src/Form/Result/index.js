import { StyledResult } from "./styled"

const Result = ({ result }) => (
    <StyledResult>
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}
                zł ={" "}
                {result.targetResult.toFixed(2)}
                {result.currency}
            </>
        )}
    </StyledResult>
)

export default Result