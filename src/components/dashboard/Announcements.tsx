const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Stock Market Surge Expected</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Analysts predict a significant surge in stock prices due to
            favorable market conditions and increased investor confidence.
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Tech Stocks Rallying</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-02
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Major tech stocks are experiencing a rally with strong earnings
            reports and positive outlooks for the sector.
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Stock Market Volatility Expected</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-03
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Experts are warning of potential volatility in the stock market due
            to global economic uncertainties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
