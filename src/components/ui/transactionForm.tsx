"use client";

import { useEffect } from "react";

const TransactionForm = () => {
  useEffect(() => {
    const openBtn = document.getElementById("openForm");
    const closeBtn = document.getElementById("closeForm");
    const transactionWindow = document.getElementById("transactionWindow");

    openBtn?.addEventListener("click", () => {
      transactionWindow?.classList.add("open");
    });

    closeBtn?.addEventListener("click", () => {
      transactionWindow?.classList.remove("open");
    });
  }, []);

  return (
    <>
      <div className="bg-gray-800 p-3 w-fit rounded-xl">
        <button className="text-white" id="openForm">
          New Transaction
        </button>
      </div>
      <div className="transactionWindow text-lg" id="transactionWindow">
        <form className="transactionForm">
          <h1 className="px-4 pt-4 text-center text-xl">New Transaction</h1>
          <p className="pb-4 text-center text-base">
            For expenses: enter negative amounts
          </p>
          <div className="mx-2 px-2 text-center">
            <label>
              Date:
              <input type="date" className="m-2 text-black" />
            </label>
            <label>
              Category:
              <select
                name="dropdown"
                id="dropdown"
                className="m-2 p-1 text-black"
              >
                <option value="none">Select A Category</option>
                <option value="Groceries">Groceries</option>
                <option value="EatingOut">Eating out</option>
                <option value="Rent/Utilities">Rent/Utilities</option>
                <option value="BodyCare">Body Care</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col mx-2 px-2 text-center">
            <label>
              Description:
              <input type="text" className="m-2 text-black" />
            </label>
            <label>
              Amount:
              <input type="number" className="m-2 text-black" />
            </label>
          </div>
          <div className="space-x-4 text-center">
            <button
              id="closeForm"
              className="mb-2 p-2 rounded-lg hover:bg-gray-800"
            >
              Cancel
            </button>
            <button id="closeForm" className="p-2 rounded-lg hover:bg-gray-800">
              Track
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TransactionForm;
