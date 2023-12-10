import {ITimeline} from "../data/timelineData.ts";
import TimelineItem from "./TimelineItem.tsx";
import Title from "./Title.tsx";

type TimeLineProps = {
    title: string;
    dataList: ITimeline[];
}

const Timelines = ({title, dataList}: TimeLineProps) => {
    return (
        <div className="">
            <Title title={title}/>
            {dataList.map(data => (
                <TimelineItem date={data.date}
                              title={data.title}
                              duration={data.duration}
                              description={data.description ? data.description : ""}/>
            ))}
        </div>
    );
};

export default Timelines;
