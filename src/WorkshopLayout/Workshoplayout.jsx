import { Outlet } from "react-router-dom";
import WorkNav from "./WorkNav";

export default function Workshoplayout() {
  return (
    <>
      <div className="text-center   mt-5 pt-5 my-5">
        <div className="m-3">Lorem ipsum dolor sit amet.</div>

        <div className="mt-3">
          <WorkNav />
        </div>
        <Outlet />
      </div>
    </>
  );
}
