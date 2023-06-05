import React, { useState } from 'react'
import './orderHistoryPage.css'
import { Categories } from '../../components/categoriespannel/categories'
import OrderHistoryCompo from '../../components/orderHistoryCompo/orderHistoryCompo'
import { DatePicker } from '@fluentui/react'
import { defaultCalendarNavigationIcons } from '@fluentui/react'




function OrderHistoryPage() {

  const [selectedDate, setSelectedDate] = useState(null);

  const dataOrderHistory = [
    {
      id: 1,
      image: 'image-url-1',
      name: 'Object 1',
      status: 'Active',
      date: '2023-06-01',
    },
    {
      id: 2,
      image: 'image-url-2',
      name: 'Object 2',
      status: 'Inactive',
      date: '2023-06-02',
    },
  ];

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
  };

  const filteredOrderHistoryDate = selectedDate
    ? dataOrderHistory.filter((item) => item.date === selectedDate)
    : dataOrderHistory;

  return (
    <div className='OrderHistoryWrapper'>
      <div className='CategoriesWrapperHistoryPage'>
        <Categories />
      </div>

      <div className='OrderHistoryCompoWrapper'>
        <div className='calendarIconPlusDatePicker'>
        <svg viewbox="0 0 40 40" width="40" height="40" stroke="#171717" fill="#171717"><path d="M11.2 17.6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2z"  /><path d="M12.8 20.8a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0z"  /><path d="M16 17.6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2z"  /><path d="M17.6 20.8a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0z"  /><path d="M20.8 17.6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2z"  /><path d="M27.2 8.8A4 4 0 0 0 23.2 4.8h-14.4A4 4 0 0 0 4.8 8.8v14.4A4 4 0 0 0 8.8 27.2h14.4a4 4 0 0 0 4-4v-14.4zM6.4 11.2h19.2v12a2.4 2.4 0 0 1-2.4 2.4h-14.4A2.4 2.4 0 0 1 6.4 23.2V11.2z m2.4-4.8h14.4A2.4 2.4 0 0 1 25.6 8.8V9.6H6.4v-0.8A2.4 2.4 0 0 1 8.8 6.4z"  /></svg>
        <div className='datePickerContainer'>
          <DatePicker onSelectDate={handleDateChange} />
        </div>
        </div>
        <div>
          {filteredOrderHistoryDate.map((item) => (
            <OrderHistoryCompo key={item.id} dataOrderHistory={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryPage
