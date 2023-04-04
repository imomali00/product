import React from "react";

const cart = () => {
  return (
    <div
      id="wrapper"
      className="max-w-md mx-auto  h-full min-h-screen __className_22677b dark:bg-dark-primary"
    >
      <div className="w-screen flex flex-col space-y-6 p-4 h-screen justify-center items-center">
        <div className="flex flex-col text-center items-center space-y-3 max-w-[75%]">
          <div className="text-large-bold">В корзине пока пусто</div>
          <div class="text-medium-light-gray dark:text-gray-tertiary text-center max-w-[75%]">
            Перейдите в каталог, чтобы оформить новый заказ
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;
