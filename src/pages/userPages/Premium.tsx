import {
  monthlyFeatures,
  studentFeatures,
  yearlyFeatures,
} from "../../components/mock/PremiumData";
import "./Premium.scss";

const Premium = () => {
  return (
    <div className="premium">
      {/* HERO */}
      <section className="premium__hero">
        <span className="badge">Tune Stream Premium</span>
        <h1>
          Unlock the Full <br />
          <span>Music Experience</span>
        </h1>
        <p>
          Ad-free music, offline downloads, HD audio, and exclusive content.
        </p>

        <div className="premium__hero-actions">
          <button className="btn btn--primary">Start Free Trial</button>
          <button className="btn btn--secondary">See All Features</button>
        </div>

        <div className="premium__stats">
          <div>
            <h3>100M+</h3>
            <span>Songs Available</span>
          </div>
          <div>
            <h3>HD+</h3>
            <span>Audio Quality</span>
          </div>
          <div>
            <h3>0</h3>
            <span>Ads Forever</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="premium__features">
        <h2>Everything You Need</h2>

        <div className="features-grid">
          {[
            "Ad-Free Listening",
            "Offline Downloads",
            "HD & Lossless Audio",
            "Unlimited Skips",
            "Exclusive Content",
            "AI Recommendations",
            "Cross-Device Sync",
            "Early Event Access",
            "Merch Discounts",
          ].map((feature) => (
            <div key={feature} className="feature-card">
              <h4>{feature}</h4>
              <p>Enjoy premium-only benefits without limits.</p>
            </div>
          ))}
        </div>
      </section>

      {/* PLANS */}
      <section className="premium__plans">
        <h2>Choose Your Plan</h2>

        <div className="plans">
          <div className="plan">
            <h4>Monthly</h4>
            <p>Perfect for trying out Premium</p>
            <h3>
              $9.99 <span>/month</span>
            </h3>

            <button className="btn btn--outline">Get Started</button>
            <ul className="premiumList">
              {monthlyFeatures.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="plan plan--popular">
            <span className="tag">Most Popular</span>
            <h4>Yearly</h4>
            <p>Best value for music lovers</p>
            <h3>
              $99.99 <span>/year</span>
            </h3>

            <button className="btn btn--primary">Get Started</button>
            <ul className="premiumList">
              {yearlyFeatures.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="plan">
            <h4>Student</h4>
            <p>For verified students</p>
            <h3>
              $4.99 <span>/month</span>
            </h3>

            <button className="btn btn--outline">Get Started</button>
            <ul className="premiumList">
              {studentFeatures.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="premium__cta">
        <h2>Ready to Upgrade Your Experience?</h2>
        <p>Join millions of music lovers on Premium.</p>
        <button className="btn btn--primary">Start Free Trial</button>
      </section>
    </div>
  );
};

export default Premium;
