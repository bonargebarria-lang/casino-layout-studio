import "./KPICard.css";

interface KPICardProps{

    title:string;

    value:string;

    status:string;

    color:string;

}

export default function KPICard({

    title,

    value,

    status,

    color,

}:KPICardProps){

    return(

            <div
                className="kpi-card"
                style={{
                "--kpi-color": color
                } as React.CSSProperties}
            >
            <div className="kpi-accent"></div>

            <div className="kpi-title">

                {title}

            </div>

            <div className="kpi-value">

                {value}

            </div>

            <div className="kpi-status">

                {status}

            </div>

        </div>

    );

}