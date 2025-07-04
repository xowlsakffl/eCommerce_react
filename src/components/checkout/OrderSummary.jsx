import React from 'react'
import { formatPriceCalculation } from '../../utils/formatPrice'

const OrderSummary = ({ totalPrice, cart, address, paymentMethod}) => {
  return (
    <div className="container mx-auto px-4 mb-8">
     <div className="flex flex-wrap">
      <div className="w-full lg:w-8/12 pr-4">
       <div className="space-y-4">
        <div className="p-4 border rounded-lg shadow-sm">
            <h2 className='text-2xl font-semibold mb-2'>주문 요약</h2>
            <p>
                <strong>배송지 주소: </strong>
                {address?.addressName + ", " + address?.buildingName}
            </p>
            <p>
                <strong>받는 사람: </strong>
                {address?.recipient}
            </p>
            <p>
                <strong>전화번호: </strong>
                {address?.recipientNumber}
            </p>
        </div>
        <div className='p-4 border rounded-lg shadow-sm'>
            <h2 className='text-2xl font-semibold mb-2'>
                결제 수단
            </h2>
            <p>
                <strong>결제 수단: </strong>
                {paymentMethod}
            </p>
        </div>

        <div className='p-4 border rounded-lg shadow-sm mb-6'>
            <h2 className='text-2xl font-semibold mb-2'>주문 목록</h2>
            <div className='space-y-2'>
                {cart?.map((item) => (
                    <div key={item?.productId} className='flex items-center'>
                        <img src={`${import.meta.env.VITE_BACK_END_URL}/images/${
                            item?.image
                        }`}
                        alt='제품'
                        className='w-12 h-12 rounded'></img>
                        <div className='text-gray-500 pl-2'>
                            <p>{item?.productName}</p>
                            <p>
                                {item?.quantity}개 × ₩{Number(item?.specialPrice).toLocaleString()} = 
                                {formatPriceCalculation(item?.quantity, item?.specialPrice)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
       </div>
      </div>


      <div className="w-full lg:w-4/12 mt-4 lg:mt-0">
        <div className="border rounded-lg shadow-sm p-4 space-y-4">
            <h2 className="text-2xl font-semibold mb-2">주문 합계</h2>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>제품</span>
                <span>{formatPriceCalculation(totalPrice, 1)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>합계</span>
                <span>{formatPriceCalculation(totalPrice, 1)}</span>
              </div>
            </div>
        </div>
        </div>
    </div>

    </div>
  )
}

export default OrderSummary