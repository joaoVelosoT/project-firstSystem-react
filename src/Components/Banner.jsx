import "./banner.css";
const Banner = () => {
    const banner = {
        title : "Banner First-System",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nesciunt, delectus vel debitis exercitationem perferendis,",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedm-aYMSVW5BaJfcx3b0H5mRgR4BQ-SXdXw&s"
    }

  return (
    <main className="containerBanner">
      <div className="containerText">
        <h2>{banner.title}</h2>
        <p>
            {banner.description}
        </p>
      </div>
      <img src= {banner.image} alt="" />
    </main>
  );
};

export default Banner;
