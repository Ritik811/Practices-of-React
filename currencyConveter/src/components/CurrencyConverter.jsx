import { useState } from "react";
import { fetchCurrencyConverter } from "../api/postApi";

export const CurrencyConveter = () => {
  const [amount, setAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState("INR");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [loading, setLoading] = useState(false);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState(null);

  const handleCurrencyConverter = async () => {
    setLoading(true);
    try {
      const res = await fetchCurrencyConverter(
        fromCurrency,
        toCurrency,
        amount,
      );
      const { conversion_result } = res.data;
      console.log(res.data);
      setConvertedAmount(conversion_result);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="currency-converter">
      <div className="currency-div">
        <h1>Currency Converter</h1>
        <div>
          <label htmlFor="currency_amount">
            Amount:
            <input
              type="number"
              id="currency_amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>

        <div className="currency-selector">
          <div>
            <label>
              From:
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              To:
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </label>
          </div>
        </div>

        <button
          disabled={loading || amount <= 0}
          onClick={handleCurrencyConverter}
        >
          {loading ? "Converting..." : "Convert"}
        </button>

        <hr />
        {convertedAmount && (
          <div>
            <h2>
              {amount} {fromCurrency} = {convertedAmount.toFixed(2)}{" "}
              {toCurrency}
            </h2>
          </div>
        )}

        {error && <p>{error}</p>}
      </div>
    </section>
  );
};
