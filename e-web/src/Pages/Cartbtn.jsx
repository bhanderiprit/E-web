import React from "react";

export const Cartbtn = ({ total, titel, img }) => {
  // group duplicates (title + image + count)
  const groupedItems = titel.reduce((acc, t, i) => {
    if (!acc[t]) {
      acc[t] = { count: 0, image: img[i] };
    }
    acc[t].count += 1;
    return acc;
  }, {});

  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center">
      <div className="h-[500px] w-[400px] bg-white shadow-md rounded-lg p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">🛒 Your Cart</h2>

        {/* Grouped products */}
        <div className="space-y-3">
          {Object.keys(groupedItems).length > 0 ? (
            Object.entries(groupedItems).map(([title, data], index) => (
              <div
                key={index}
                className="flex items-center gap-3 border-b pb-2"
              >
                <img
                  src={data.image}
                  alt={title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="font-medium text-gray-800">{title}</p>
                  <p className="text-sm text-gray-600">Qty: {data.count}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No products added yet</p>
          )}
        </div>

        {/* Total */}
        <div className="mt-4 border-t pt-2">
          <h3 className="text-lg font-bold">Total: ${total.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};
