import { Table } from "antd";
import { centiSecondsToDisplayString } from "../../helpers/helpers";
export default function Laps({ laps }) {
  const dataSource = laps.map((val, i) => ({
    time: centiSecondsToDisplayString(val),
    key: i,
    lap: i,
  }));
  const columns = [
    {
      title: "Lap",
      dataIndex: "lap",
      key: "lap",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
  ];
  return <Table dataSource={dataSource} columns={columns}></Table>;
}
