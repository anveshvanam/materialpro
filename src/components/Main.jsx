import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import bell from "../assets/bell.png";
import order from "../assets/order.png";
import server from "../assets/server.png";
import server2 from "../assets/server2.png";
import user from "../assets/user.png";
import notification from "../assets/notification.png";

const data = [
  {
    month: "January",
    2020: 20,
    2022: 10,
  },
  {
    month: "February",
    2020: 40,
    2022: 20,
  },
  {
    month: "March",
    2020: 50,
    2022: 40,
  },
  {
    month: "April",
    2020: 30,
    2022: 60,
  },
  {
    month: "May",
    2020: 40,
    2022: 20,
  },
  {
    month: "June",
    2020: 50,
    2022: 40,
  },
  {
    month: "July",
    2020: 30,
    2022: 60,
  },
  {
    month: "August",
    2020: 30,
    2022: 60,
  },
  {
    month: "September",
    2020: 40,
    2022: 20,
  },
];

const blogsData = [
  {
    title: "This is simple blog",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://demos.wrappixel.com/free-admin-templates/react/materialpro-react-free/main/static/media/bg1.537e9bd5.jpg",

    comments: 2,
    likes: 1,
  },
  {
    title: "This is simple blog",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://demos.wrappixel.com/free-admin-templates/react/materialpro-react-free/main/static/media/bg2.94ab4b60.jpg",

    comments: 2,
    likes: 1,
  },
  {
    title: "This is simple blog",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://demos.wrappixel.com/free-admin-templates/react/materialpro-react-free/main/static/media/bg3.5668e1f0.jpg",

    comments: 2,
    likes: 1,
  },
  {
    title: "This is simple blog",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    imageUrl:
      "https://demos.wrappixel.com/free-admin-templates/react/materialpro-react-free/main/static/media/bg4.62319dde.jpg",

    comments: 2,
    likes: 1,
  },
];

const SalesChart = () => {
  return (
    <div className="flex flex-col w-full pl-20 outline-dashed">
      <div className="flex w-full">
        <div
          style={{
            height: "500px",
            width: " 50%",
            backgroundColor: "white",
            padding: "20px",
            margin: "20px",
            borderRadius: "10px",
          }}
        >
          <h1 className="font-semibold text-xl">Sales Summary</h1>
          <h2 className="text-slate-500 mb-10">Yearly Sales Report</h2>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="2020" fill="#74aaff" barSize={10} />
              <Bar dataKey="2022" fill="#70d4fe" barSize={10} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col justify-between bg-white w-[27%] rounded-md px-6 p-4  gap-5 m-5">
          <div>
            <h1 className="font-medium text-xl">Feeds</h1>
            <h2 className="text-slate-500 mb-10">Widgets you can use</h2>
          </div>
          <div className="flex gap-4">
            <img src={bell} alt="bell" className="w-8 h-8 mx-4" />
            <p className="text-lg font-medium">Cras justo odio</p>
            <span className="ml-auto text-slate-400">14 mins ago</span>
          </div>
          <div className="flex gap-4">
            <img src={user} alt="bell" className="w-8 h-8 mx-4" />
            <p className="text-lg font-medium">New user registered</p>
            <span className="ml-auto text-slate-400">14 mins ago</span>
          </div>

          <div className="flex gap-4">
            <img src={server} alt="bell" className="w-8 h-8 mx-4" />
            <p className="text-lg font-medium">Server #1 overloaded</p>
            <span className="ml-auto text-slate-400">14 mins ago</span>
          </div>
          <div className="flex gap-4">
            <img src={order} alt="bell" className="w-8 h-8 mx-4" />
            <p className="text-lg font-medium">New order received</p>
            <span className="ml-auto text-slate-400">14 mins ago</span>
          </div>
          <div className="flex gap-4">
            <img src={notification} alt="bell" className="w-8 h-8 mx-4" />
            <p className="text-lg font-medium">Cras justo odio</p>
            <span className="ml-auto text-slate-400">14 mins ago</span>
          </div>
          <div className="flex gap-4">
            <img src={server2} alt="bell" className="w-8 h-8 mx-4" />
            <p className="text-lg font-medium">Server #1 overloaded</p>
            <span className="ml-auto text-slate-400">14 mins ago</span>
          </div>
        </div>
      </div>
      <div className="bg-white w-[80%] px-6 p-4 rounded-md m-5">
        <h1 className="font-medium text-xl">Project Listing</h1>
        <h2 className="text-slate-500 mb-5">Overview of the projects</h2>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead className="text-left h-10 border-b-[1px] border-b-slate-300">
            <tr>
              <th>Team Lead</th>
              <th>Project</th>
              <th>Status</th>
              <th>Weeks</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{}} className=" border-b-[1px] border-b-slate-300">
              <td className="flex items-center h-20">
                <img
                  src="https://www.clipartmax.com/png/small/54-546487_a-little-over-a-month-ago-i-had-lasik-surgery-user-profile.png"
                  className="w-12 rounded-full mr-4"
                  alt="profile"
                />
                <div>
                  <p> Hanna Gover </p>
                  <p className="text-slate-500">hgover@gmail.com</p>
                </div>
              </td>
              <td>Flexy React</td>
              <td>
                <p className="bg-red-600 h-3 w-3 rounded-xl text-center ml-4"></p>
              </td>
              <td>35</td>
              <td>95k</td>
            </tr>
            <tr style={{}} className=" border-b-[1px] border-b-slate-300">
              <td className="flex items-center h-20">
                <img
                  src="https://www.clipartmax.com/png/small/54-546487_a-little-over-a-month-ago-i-had-lasik-surgery-user-profile.png"
                  className="w-12 rounded-full mr-4"
                  alt="profile"
                />
                <div>
                  <p> Hanna Gover </p>
                  <p className="text-slate-500">hgover@gmail.com</p>
                </div>
              </td>
              <td>Learning pro React</td>
              <td>
                <p className="bg-green-500 h-3 w-3 rounded-xl text-center ml-4"></p>
              </td>
              <td>35</td>
              <td>95k</td>
            </tr>
            <tr style={{}} className=" border-b-[1px] border-b-slate-300">
              <td className="flex items-center h-20">
                <img
                  src="https://www.clipartmax.com/png/small/54-546487_a-little-over-a-month-ago-i-had-lasik-surgery-user-profile.png"
                  className="w-12 rounded-full mr-4"
                  alt="profile"
                />
                <div>
                  <p> Hanna Gover </p>
                  <p className="text-slate-500">hgover@gmail.com</p>
                </div>
              </td>
              <td>Elite React</td>
              <td>
                <p className="bg-yellow-400 h-3 w-3 rounded-xl text-center ml-4"></p>
              </td>
              <td>35</td>
              <td>95k</td>
            </tr>
            <tr style={{}} className=" border-b-[1px] border-b-slate-300">
              <td className="flex items-center h-20">
                <img
                  src="https://www.clipartmax.com/png/small/54-546487_a-little-over-a-month-ago-i-had-lasik-surgery-user-profile.png"
                  className="w-12 rounded-full mr-4"
                  alt="profile"
                />
                <div>
                  <p> Hanna Gover </p>
                  <p className="text-slate-500">hgover@gmail.com</p>
                </div>
              </td>
              <td>Flexy React</td>
              <td>
                <p className="bg-red-600 h-3 w-3 rounded-xl text-center ml-4"></p>
              </td>
              <td>35</td>
              <td>95k</td>
            </tr>
            <tr style={{}} className=" ">
              <td className="flex items-center h-20">
                <img
                  src="https://www.clipartmax.com/png/small/54-546487_a-little-over-a-month-ago-i-had-lasik-surgery-user-profile.png"
                  className="w-12 rounded-full mr-4"
                  alt="profile"
                />
                <div>
                  <p> Hanna Gover </p>
                  <p className="text-slate-500">hgover@gmail.com</p>
                </div>
              </td>
              <td>Ample React</td>
              <td>
                <p className="bg-green-500 h-3 w-3 rounded-xl text-center ml-4"></p>
              </td>
              <td>35</td>
              <td>95k</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex gap-5 ml-6 mb-10">
        {blogsData.map((eachItem) => (
          <div
            key={eachItem.imageUrl}
            className="flex flex-col justify-between bg-white w-[19rem]   rounded-lg"
          >
            <img
              src={eachItem.imageUrl}
              alt="blog"
              className=" w-full rounded-lg"
            />
            <div className="p-6 h-60">
              <h1 className="font-medium text-xl">{eachItem.title}</h1>
              <p>
                {eachItem.comments} comments, {eachItem.likes} like
              </p>
              <h2 className="text-slate-500 mb-4 mt-4">
                {eachItem.description}
              </h2>
              <button className="bg-[#1a74c3] w-32 rounded-lg h-10 text-white">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesChart;
