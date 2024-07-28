// function Fast() {
//   return (
//    <div>

//      <video
//       muted
//       playsInline
//       preload="none"
//       className="chr-carousel__video shadow-ui"
//       aria-hidden="true"
//       poster="/chrome/chrome/static/images/dev-components/home-poster-2x.webp"
//       style={{
//         // transform: 'translate(0px, -216px)',
//         // width: '100%',
//         boxShadow: 'rgba(32, 33, 36, 0.1) 0px 8px 20px 0px'
//       }}
//     >
//       <source type="video/webm" src="/chrome/chrome/static/videos/dev-components/non-chrome.webm" />
//       <source type="video/mp4" src="/chrome/chrome/static/videos/dev-components/non-chrome.mp4" />
//       Your browser does not support the video tag.
//     </video>
//    </div>
//   );
// }
// export default Fast;
import { FaTachometerAlt } from "react-icons/fa";

const Fast = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1 className="chr-headline-0 chr-chrome-hero__heading">
          <span>
            The{" "}
            <button
              className="btn rounded-pill btn-lg"
              style={{ background: "#ceead6", color: "#188038" }}
            >
              {" "}
              <FaTachometerAlt size={50} color="#4CAF50" className="me-2" />
              Fast
            </button>
            way to do
          </span>
          <br />
          <span>things online</span>
        </h1>
      </div>
    </div>
  );
};

export default Fast;
