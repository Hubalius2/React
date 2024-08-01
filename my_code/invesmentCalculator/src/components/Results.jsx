import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
    
    let result = calculateInvestmentResults(userInput);
    const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
    
    return (
        <table id="result">
             <thead>
                <tr>
                    <th>Year</th>
                    <th>Invested Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Invested</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {result.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                   return(
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(yearData.annualInvestment)}</td>
                    </tr>
                   ); 
                })}
            </tbody>
        </table>
    );
}