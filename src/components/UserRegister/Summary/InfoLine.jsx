export default function InfoLine({label, value})
{
    return(
        <div className="info-line">
            <span>{label}</span>
            <span>{value}</span>
        </div>
    );
}