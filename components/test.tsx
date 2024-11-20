import Link from "next/link";
import { mockData } from "../utils/mockdata";

const HomePage: React.FC = () => (
  <div>
    <h1>Events</h1>
    <ul>
      {Object.keys(mockData).map((key: any) => (
        <li key={key}>
          <Link href={`/events/${key}`}>{mockData[key].eventname}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default HomePage;
