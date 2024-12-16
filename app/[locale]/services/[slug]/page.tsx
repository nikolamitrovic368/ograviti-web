import { Typography } from '@/components/atoms/typography'
import Title from '@/components/modules/heading-title'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <Title title="Data Analysis" />
      <div className=" grid  grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-12">
        <Typography variant="subtitle1">
          Our data analysis service leverages advanced analytical tools and
          methodologies to transform raw data into actionable insights. We
          provide comprehensive data visualization, trend analysis, and
          predictive modeling to help businesses make informed decisions.
          Whether you need to understand customer behavior, optimize operations,
          or forecast future trends, our expert team delivers precise and
          impactful results tailored to your unique needs.
        </Typography>
        <video
          width="320"
          height="240"
          controls
          className="w-full rounded-3xl"
          playsInline
        >
          <source src="/videos/services/4.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col gap-4 md:gap-8 md:pt-8">
        <Typography variant="h2">
          Key Features of Our Data Analysis Service
        </Typography>
        <Typography variant="subtitle2">
          <ul className="flex flex-col gap-1 pl-4">
            <li className="list-outside list-disc">
              Data Visualization: Transform complex data sets into
              easy-to-understand visual formats such as charts, graphs, and
              dashboards.
            </li>
            <li className="list-outside list-disc">
              Trend Analysis: Identify and analyze patterns in your data to
              understand past performance and predict future outcomes.
            </li>
            <li className="list-outside list-disc">
              Predictive Modeling: Use advanced statistical techniques and
              machine learning to forecast trends and behaviors.
            </li>
            <li className="list-outside list-disc">
              Customer Insights: Gain a deep understanding of customer behavior
              and preferences to enhance customer experience and loyalty.
            </li>
            <li className="list-outside list-disc">
              Operational Optimization: Analyze operational data to identify
              inefficiencies and optimize processes for improved performance.
            </li>
            <li className="list-outside list-disc">
              Custom Reporting: Generate detailed reports tailored to your
              specific business needs and objectives.
            </li>
            <li className="list-outside list-disc">
              Data Integration: Seamlessly integrate data from multiple sources
              to provide a comprehensive analysis.
            </li>
            <li className="list-outside list-disc">
              Real-time Analytics: Access real-time data analysis to make timely
              and informed business decisions.
            </li>
          </ul>
        </Typography>
      </div>
    </main>
  )
}
