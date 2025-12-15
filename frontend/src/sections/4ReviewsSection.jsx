import React from 'react';

const reviews = [
  { quote: "Our customer support has never been faster thanks to this AI!", author: "- Jane D., Support Manager" },
  { quote: "Easy integration and powerful features. Highly recommend!", author: "- John S., CEO" },
  { quote: "The chatbot understands context perfectly. Game-changer.", author: "- Alex R., Product Lead" },
  { quote: "Saves us hours every day. Worth every penny.", author: "- Sarah K., Operations" },
  { quote: "Seamless multichannel support. Our customers love it.", author: "- Mike L., Marketing" },
  { quote: "Low latency responses make it feel human.", author: "- Emily T., Developer" },
  { quote: "Analytics dashboard is insightful for improvements.", author: "- David B., Analyst" },
  { quote: "No retraining needed – it learns on its own!", author: "- Lisa M., AI Specialist" },
  { quote: "Fills forms automatically – brilliant!", author: "- Tom H., User" },
  { quote: "Human handoff is smooth when needed.", author: "- Chris P., Team Lead" },
  { quote: "Secure and enterprise-ready out of the box.", author: "- Rachel G., CTO" },
  { quote: "Plug & play setup in minutes.", author: "- Paul V., Founder" },
  { quote: "Best ROI we've seen in years.", author: "- Nina W., CFO" },
  { quote: "Customer satisfaction scores jumped 40%.", author: "- Oscar T., Manager" },
  { quote: "Multilingual support works flawlessly.", author: "- Petra S., Global Lead" },
  { quote: "The AI adapts to our brand voice perfectly.", author: "- Quinn R., Brand Director" }
];

const ReviewsSection = () => {
  const style = `
    @import url('https://unpkg.com/normalize.css') layer(normalize);
    @layer scroll, setup, grid;
    @layer scroll {
      :root {
        --power-1-out: linear(
          0 0%,
          0.0027 3.64%,
          0.0106 7.29%,
          0.0425 14.58%,
          0.0957 21.87%,
          0.1701 29.16%,
          0.2477 35.19%,
          0.3401 41.23%,
          0.5982 55.18%,
          0.7044 61.56%,
          0.7987 68.28%,
          0.875 75%,
          0.9297 81.25%,
          0.9687 87.5%,
          0.9922 93.75%,
          1 100%
        );
        --power-2-out: linear(
          0 0%,
          0.0036 9.62%,
          0.0185 16.66%,
          0.0489 23.03%,
          0.0962 28.86%,
          0.1705 34.93%,
          0.269 40.66%,
          0.3867 45.89%,
          0.5833 52.95%,
          0.683 57.05%,
          0.7829 62.14%,
          0.8621 67.46%,
          0.8991 70.68%,
          0.9299 74.03%,
          0.9545 77.52%,
          0.9735 81.21%,
          0.9865 85%,
          0.9949 89.15%,
          1 100%
        );
        --sine: linear(
          0 0%,
          0.2861 18.47%,
          0.4829 32.08%,
          0.6437 44.52%,
          0.7712 56.07%,
          0.8722 67.47%,
          0.9115 73.02%,
          0.9434 78.49%,
          0.9682 83.91%,
          0.9859 89.3%,
          0.9965 94.66%,
          1 100%
        );
      }
      @keyframes fade {
        0%,
        55% {
          opacity: 0;
        }
      }
      @keyframes reveal {
        0%,
        30% {
          scale: 0;
        }
      }
      @keyframes scale-x {
        0%,
        10% {
          width: 100vw;
        }
      }
      @keyframes scale-y {
        0%,
        10% {
          height: 100vh;
        }
      }
      @keyframes center-position {
        0% {
          top: 0%;
          left: 0%;
        }
        100% {
          top: 50%;
          left: 50%;
        }
      }
      @keyframes shrink-text {
        0%,
        10% {
          font-size: 2rem;
        }
        100% {
          font-size: 1rem;
        }
      }
      @keyframes shrink-author {
        0%,
        10% {
          font-size: 1.5rem;
        }
        100% {
          font-size: 0.875rem;
        }
      }
      @media (prefers-reduced-motion: no-preference) {
        @supports (animation-timeline: scroll()) and (animation-range: 0 100%) {
          .content-wrap {
            min-height: 240vh;
            view-timeline-name: --runner;
          }
          .content .scaler > * {
            animation-name: scale-x, scale-y, center-position;
            animation-fill-mode: both;
            animation-timing-function: var(--power-2-out), var(--power-1-out), var(--power-2-out);
            animation-timeline: --runner, --runner, --runner;
            animation-range: entry 100% exit -20%;
          }
          .content .scaler .center-review-quote {
            animation-name: shrink-text;
            animation-fill-mode: both;
            animation-timing-function: var(--power-2-out);
            animation-timeline: --runner;
            animation-range: entry 100% exit -20%;
          }
          .content .scaler .center-review-author {
            animation-name: shrink-author;
            animation-fill-mode: both;
            animation-timing-function: var(--power-2-out);
            animation-timeline: --runner;
            animation-range: entry 100% exit -20%;
          }
          .content .grid .layer {
            animation-name: fade, reveal;
            animation-fill-mode: both;
            animation-timing-function: var(--sine), var(--power-1-out);
            animation-timeline: --runner, --runner;
            animation-range: entry 100% exit 0%;
          }
          .content .grid .layer:nth-of-type(2) {
            animation-range: entry 100% exit -10%;
          }
          .content .grid .layer:nth-of-type(3) {
            animation-range: entry 100% exit -20%;
          }
          .content .grid .layer:nth-of-type(4) {
            animation-range: entry 100% exit -30%;
          }
        }
      }
    }
    @layer setup {
      :root {
        --container-width: 1600px;
        --gap: clamp(10px, 7.35vw, 80px);
        --gutter: 0;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .content {
        min-height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        position: sticky;
        top: 0;
      }
      .scaler {
        z-index: 2;
        width: 100%;
        height: 100%;
        position: relative;
      }
      .scaler > * {
        position: absolute;
        top: 0%;
        left: 0%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        border-radius: 0;
      }
    }
    @layer grid {
      .grid {
        width: var(--container-width);
        max-width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        gap: var(--gap);
        margin: 0 auto;
        align-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .grid > .layer {
        display: grid;
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        grid-template-columns: subgrid;
        grid-template-rows: subgrid;
      }
      .grid .layer > div {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .grid .layer:nth-of-type(1) > div:nth-of-type(1) {
        grid-column: 1;
        grid-row: 1;
      }
      .grid .layer:nth-of-type(1) > div:nth-of-type(2) {
        grid-column: 1;
        grid-row: 2;
      }
      .grid .layer:nth-of-type(1) > div:nth-of-type(3) {
        grid-column: 1;
        grid-row: 3;
      }
      .grid .layer:nth-of-type(1) > div:nth-of-type(4) {
        grid-column: 1;
        grid-row: 4;
      }
      .grid .layer:nth-of-type(1) > div:nth-of-type(5) {
        grid-column: 4;
        grid-row: 1;
      }
      .grid .layer:nth-of-type(2) > div:nth-of-type(1) {
        grid-column: 4;
        grid-row: 2;
      }
      .grid .layer:nth-of-type(2) > div:nth-of-type(2) {
        grid-column: 4;
        grid-row: 3;
      }
      .grid .layer:nth-of-type(2) > div:nth-of-type(3) {
        grid-column: 4;
        grid-row: 4;
      }
      .grid .layer:nth-of-type(2) > div:nth-of-type(4) {
        grid-column: 2;
        grid-row: 1;
      }
      .grid .layer:nth-of-type(2) > div:nth-of-type(5) {
        grid-column: 2;
        grid-row: 4;
      }
      .grid .layer:nth-of-type(3) > div:nth-of-type(1) {
        grid-column: 2;
        grid-row: 2;
      }
      .grid .layer:nth-of-type(3) > div:nth-of-type(2) {
        grid-column: 3;
        grid-row: 1;
      }
      .grid .layer:nth-of-type(3) > div:nth-of-type(3) {
        grid-column: 3;
        grid-row: 4;
      }
      .grid .layer:nth-of-type(4) > div:nth-of-type(1) {
        grid-column: 2;
        grid-row: 3;
      }
      .grid .layer:nth-of-type(4) > div:nth-of-type(2) {
        grid-column: 3;
        grid-row: 2;
      }
      .grid .scaler {
        grid-area: 3 / 3;
        position: relative;
      }
    }
    .content-wrap {
      overflow: clip;
      background: white;
    }
    .review-card {
      background-color: white;
      color: black;
      padding: 1rem;
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .review-quote {
      font-style: italic;
      text-align: center;
      font-size: 1rem;
      line-height: 1.5;
    }
    .review-author {
      margin-top: 0.5rem;
      font-weight: bold;
      font-size: 0.875rem;
    }
    .center-review-card {
      background-color: white;
      color: black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      border-radius: 0.5rem;
    }
    .center-review-quote {
      font-style: italic;
      text-align: center;
      font-size: 2rem;
      line-height: 1.5;
    }
    .center-review-author {
      margin-top: 0.5rem;
      font-weight: bold;
      font-size: 1.5rem;
    }
  `;

  const layerReviews = reviews.slice(1);
  const layer1Reviews = layerReviews.slice(0, 5);
  const layer2Reviews = layerReviews.slice(5, 10);
  const layer3Reviews = layerReviews.slice(10, 13);
  const layer4Reviews = layerReviews.slice(13, 15);

  return (
    <>
      <style>{style}</style>
      <div className="content-wrap">
        <div className="content">
          <div className="grid">
            <div className="layer">
              {layer1Reviews.map((review, index) => (
                <div key={index}>
                  <div className="review-card">
                    <div className="review-quote">
                      "{review.quote}"
                    </div>
                    <div className="review-author">
                      {review.author}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="layer">
              {layer2Reviews.map((review, index) => (
                <div key={index}>
                  <div className="review-card">
                    <div className="review-quote">
                      "{review.quote}"
                    </div>
                    <div className="review-author">
                      {review.author}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="layer">
              {layer3Reviews.map((review, index) => (
                <div key={index}>
                  <div className="review-card">
                    <div className="review-quote">
                      "{review.quote}"
                    </div>
                    <div className="review-author">
                      {review.author}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="layer">
              {layer4Reviews.map((review, index) => (
                <div key={index}>
                  <div className="review-card">
                    <div className="review-quote">
                      "{review.quote}"
                    </div>
                    <div className="review-author">
                      {review.author}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="scaler">
              <div className="center-review-card">
                <div className="center-review-quote">
                  "{reviews[0].quote}"
                </div>
                <div className="center-review-author">
                  {reviews[0].author}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsSection;