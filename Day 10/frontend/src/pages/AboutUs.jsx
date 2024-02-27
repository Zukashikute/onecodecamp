const AboutUs = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6">
          <h1>ABOUT US</h1>

          <p>
            OneCodeCamp is an online coding bootcamp designed to help
            individuals learn the necessary skills to become proficient in
            coding.
          </p>

          <p>
            Our team of experienced instructors will guide you through the
            fundamentals of coding, helping you develop a strong foundation in
            the most in-demand programming languages. You’ll learn to think like
            a programmer and apply your skills to real-world projects.
          </p>

          <p>
            With our flexible schedule, you can learn at your own pace and fit
            our courses into your busy life. Whether you’re a beginner looking
            to break into the tech industry or an experienced programmer looking
            to advance your career, our online coding bootcamp has something for
            you.
          </p>

          <p>
            Enroll today and take the first step towards a rewarding career in
            technology!
          </p>
        </div>

        <div className="col-6 d-flex align-items-center">
          <div style={{ maxWidth: "800px" }}>
            <img
              src="https://onecodecamp.com/wp-content/uploads/2023/04/about-us-24-1536x1355.png"
              className="w-100"
            />
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-4">
          <h2>01</h2>
          <h3>Why Choose Us</h3>
          <p>
            We offer a wide range of programming courses that suit your needs,
            with our dedicated instructors and 24/7 teaching assistance, you can
            enjoy learning anytime from anywhere!
          </p>
        </div>
        <div className="col-4">
          <h2>02</h2>
          <h3>Our Mission</h3>
          <p>
            OneCodeCamp aim to provide quality and industry-trending education
            to students globally, equipping them with the skills the industry
            needs.
          </p>
        </div>
        <div className="col-4">
          <h2>03</h2>
          <h3>Our Visions</h3>
          <p>
            Our vision is to provide accessible and high-quality education to
            aspiring programmers around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
