import React, { useState } from 'react'
import cl from './Calendar.module.css'

const Calendar = ({date, month}) => {
    const dayClass = cl.day
    const rootClasses = [cl.day, cl.active].join(' ')
    const [monthNow, setMonthNow] = useState(month)
    const nowMonth = [
        {id:0, m: "Январь"},
        {id:1, m: "Февраль"},
        {id:2, m: "Март"},
        {id:3, m: "Апрель"},
        {id:4, m: "Май"},
        {id:5, m: "Июнь"},
        {id:6, m: "Июль"},
        {id:7, m: "Август"},
        {id:8, m: "Сентябрь"},
        {id:9, m: "Октябрь"},
        {id:10, m: "Ноябрь"},
        {id:11, m: "Декабрь"},
    ]
    const jan = [
        {id:1, day: "01"},
        {id:2, day: "02"},
        {id:3, day: "03"},
        {id:4, day: "04"},
        {id:5, day: "05"},
        {id:6, day: "06"},
        {id:7, day: "07"},
        {id:8, day: "08"},
        {id:9, day: "09"},
        {id:10, day: "10"},
        {id:11, day: "11"},
        {id:12, day: "12"},
        {id:13, day: "13"},
        {id:14, day: "14"},
        {id:15, day: "15"},
        {id:16, day: "16"},
        {id:17, day: "17"},
        {id:18, day: "18"},
        {id:19, day: "19"},
        {id:20, day: "20"},
        {id:21, day: "21"},
        {id:22, day: "22"},
        {id:23, day: "23"},
        {id:24, day: "24"},
        {id:25, day: "25"},
        {id:26, day: "26"},
        {id:27, day: "27"},
        {id:28, day: "28"},
        {id:29, day: "29"},
        {id:30, day: "30"},
        {id:31, day: "31"},
    ]
    const fab = [
        {id:"a", day: ""},
        {id:"b", day: ""},
        {id:"c", day: ""},
        {id:"d", day: ""},
        {id:"e", day: ""},
        {id:1, day: "01"},
        {id:2, day: "02"},
        {id:3, day: "03"},
        {id:4, day: "04"},
        {id:5, day: "05"},
        {id:6, day: "06"},
        {id:7, day: "07"},
        {id:8, day: "08"},
        {id:9, day: "09"},
        {id:10, day: "10"},
        {id:11, day: "11"},
        {id:12, day: "12"},
        {id:13, day: "13"},
        {id:14, day: "14"},
        {id:15, day: "15"},
        {id:16, day: "16"},
        {id:17, day: "17"},
        {id:18, day: "18"},
        {id:19, day: "19"},
        {id:20, day: "20"},
        {id:21, day: "21"},
        {id:22, day: "22"},
        {id:23, day: "23"},
        {id:24, day: "24"},
        {id:25, day: "25"},
        {id:26, day: "26"},
        {id:27, day: "27"},
        {id:28, day: "28"},
    ]
    const mar = [
        {id:"a", day: ""},
        {id:"b", day: ""},
        {id:"c", day: ""},
        {id:"d", day: ""},
        {id:"e", day: ""},
        {id:"f", day: ""},
        {id:1, day: "01"},
        {id:2, day: "02"},
        {id:3, day: "03"},
        {id:4, day: "04"},
        {id:5, day: "05"},
        {id:6, day: "06"},
        {id:7, day: "07"},
        {id:8, day: "08"},
        {id:9, day: "09"},
        {id:10, day: "10"},
        {id:11, day: "11"},
        {id:12, day: "12"},
        {id:13, day: "13"},
        {id:14, day: "14"},
        {id:15, day: "15"},
        {id:16, day: "16"},
        {id:17, day: "17"},
        {id:18, day: "18"},
        {id:19, day: "19"},
        {id:20, day: "20"},
        {id:21, day: "21"},
        {id:22, day: "22"},
        {id:23, day: "23"},
        {id:24, day: "24"},
        {id:25, day: "25"},
        {id:26, day: "26"},
        {id:27, day: "27"},
        {id:28, day: "28"},
        {id:29, day: "29"},
        {id:30, day: "30"},
        {id:31, day: "31"},
    ]
    const apr = [
        {id:"f", day: ""},
        {id:1, day: "01"},
        {id:2, day: "02"},
        {id:3, day: "03"},
        {id:4, day: "04"},
        {id:5, day: "05"},
        {id:6, day: "06"},
        {id:7, day: "07"},
        {id:8, day: "08"},
        {id:9, day: "09"},
        {id:10, day: "10"},
        {id:11, day: "11"},
        {id:12, day: "12"},
        {id:13, day: "13"},
        {id:14, day: "14"},
        {id:15, day: "15"},
        {id:16, day: "16"},
        {id:17, day: "17"},
        {id:18, day: "18"},
        {id:19, day: "19"},
        {id:20, day: "20"},
        {id:21, day: "21"},
        {id:22, day: "22"},
        {id:23, day: "23"},
        {id:24, day: "24"},
        {id:25, day: "25"},
        {id:26, day: "26"},
        {id:27, day: "27"},
        {id:28, day: "28"},
        {id:29, day: "29"},
        {id:30, day: "30"},
    ]
    const may = [
        {id:"a", day: ""},
        {id:"b", day: ""},
        {id:"c", day: ""},
        {id:1, day: "01"},
        {id:2, day: "02"},
        {id:3, day: "03"},
        {id:4, day: "04"},
        {id:5, day: "05"},
        {id:6, day: "06"},
        {id:7, day: "07"},
        {id:8, day: "08"},
        {id:9, day: "09"},
        {id:10, day: "10"},
        {id:11, day: "11"},
        {id:12, day: "12"},
        {id:13, day: "13"},
        {id:14, day: "14"},
        {id:15, day: "15"},
        {id:16, day: "16"},
        {id:17, day: "17"},
        {id:18, day: "18"},
        {id:19, day: "19"},
        {id:20, day: "20"},
        {id:21, day: "21"},
        {id:22, day: "22"},
        {id:23, day: "23"},
        {id:24, day: "24"},
        {id:25, day: "25"},
        {id:26, day: "26"},
        {id:27, day: "27"},
        {id:28, day: "28"},
        {id:29, day: "29"},
        {id:30, day: "30"},
        {id:31, day: "31"},
    ]
    const jun = [
        {id:"a", day: ""},
        {id:"b", day: ""},
        {id:"c", day: ""},
        {id:"d", day: ""},
        {id:"e", day: ""},
        {id:"f", day: ""},
        {id:1, day: "01"},
        {id:2, day: "02"},
        {id:3, day: "03"},
        {id:4, day: "04"},
        {id:5, day: "05"},
        {id:6, day: "06"},
        {id:7, day: "07"},
        {id:8, day: "08"},
        {id:9, day: "09"},
        {id:10, day: "10"},
        {id:11, day: "11"},
        {id:12, day: "12"},
        {id:13, day: "13"},
        {id:14, day: "14"},
        {id:15, day: "15"},
        {id:16, day: "16"},
        {id:17, day: "17"},
        {id:18, day: "18"},
        {id:19, day: "19"},
        {id:20, day: "20"},
        {id:21, day: "21"},
        {id:22, day: "22"},
        {id:23, day: "23"},
        {id:24, day: "24"},
        {id:25, day: "25"},
        {id:26, day: "26"},
        {id:27, day: "27"},
        {id:28, day: "28"},
        {id:29, day: "29"},
        {id:30, day: "30"},
    ]
    const jul = [
        {id:"f", day: ""},
        {id:1, day: "01"},
        {id:2, day: "02"},
        {id:3, day: "03"},
        {id:4, day: "04"},
        {id:5, day: "05"},
        {id:6, day: "06"},
        {id:7, day: "07"},
        {id:8, day: "08"},
        {id:9, day: "09"},
        {id:10, day: "10"},
        {id:11, day: "11"},
        {id:12, day: "12"},
        {id:13, day: "13"},
        {id:14, day: "14"},
        {id:15, day: "15"},
        {id:16, day: "16"},
        {id:17, day: "17"},
        {id:18, day: "18"},
        {id:19, day: "19"},
        {id:20, day: "20"},
        {id:21, day: "21"},
        {id:22, day: "22"},
        {id:23, day: "23"},
        {id:24, day: "24"},
        {id:25, day: "25"},
        {id:26, day: "26"},
        {id:27, day: "27"},
        {id:28, day: "28"},
        {id:29, day: "29"},
        {id:30, day: "30"},
        {id:31, day: "31"},
    ]
    const aug = [
        {id:"a", day: ""},
        {id:"b", day: ""},
        {id:"c", day: ""},
        {id:"d", day: ""},
        {id:1, day: "01"},
        {id:2, day: "02"},
        {id:3, day: "03"},
        {id:4, day: "04"},
        {id:5, day: "05"},
        {id:6, day: "06"},
        {id:7, day: "07"},
        {id:8, day: "08"},
        {id:9, day: "09"},
        {id:10, day: "10"},
        {id:11, day: "11"},
        {id:12, day: "12"},
        {id:13, day: "13"},
        {id:14, day: "14"},
        {id:15, day: "15"},
        {id:16, day: "16"},
        {id:17, day: "17"},
        {id:18, day: "18"},
        {id:19, day: "19"},
        {id:20, day: "20"},
        {id:21, day: "21"},
        {id:22, day: "22"},
        {id:23, day: "23"},
        {id:24, day: "24"},
        {id:25, day: "25"},
        {id:26, day: "26"},
        {id:27, day: "27"},
        {id:28, day: "28"},
        {id:29, day: "29"},
        {id:30, day: "30"},
        {id:31, day: "31"},
    ]
    const sept = [
        {id:"a", day: ""},
        {id:"b", day: ""},
        {id:"c", day: ""},
        {id:"d", day: ""},
        {id:"e", day: ""},
        {id:"f", day: ""},
        {id:1, day: "01"},
        {id:2, day: "02"},
        {id:3, day: "03"},
        {id:4, day: "04"},
        {id:5, day: "05"},
        {id:6, day: "06"},
        {id:7, day: "07"},
        {id:8, day: "08"},
        {id:9, day: "09"},
        {id:10, day: "10"},
        {id:11, day: "11"},
        {id:12, day: "12"},
        {id:13, day: "13"},
        {id:14, day: "14"},
        {id:15, day: "15"},
        {id:16, day: "16"},
        {id:17, day: "17"},
        {id:18, day: "18"},
        {id:19, day: "19"},
        {id:20, day: "20"},
        {id:21, day: "21"},
        {id:22, day: "22"},
        {id:23, day: "23"},
        {id:24, day: "24"},
        {id:25, day: "25"},
        {id:26, day: "26"},
        {id:27, day: "27"},
        {id:28, day: "28"},
        {id:29, day: "29"},
        {id:30, day: "30"},
    ]
    const oct = [
        {id:"f", day: ""},
        {id:"d", day: ""},
        {id:1, day: "01"},
        {id:2, day: "02"},
        {id:3, day: "03"},
        {id:4, day: "04"},
        {id:5, day: "05"},
        {id:6, day: "06"},
        {id:7, day: "07"},
        {id:8, day: "08"},
        {id:9, day: "09"},
        {id:10, day: "10"},
        {id:11, day: "11"},
        {id:12, day: "12"},
        {id:13, day: "13"},
        {id:14, day: "14"},
        {id:15, day: "15"},
        {id:16, day: "16"},
        {id:17, day: "17"},
        {id:18, day: "18"},
        {id:19, day: "19"},
        {id:20, day: "20"},
        {id:21, day: "21"},
        {id:22, day: "22"},
        {id:23, day: "23"},
        {id:24, day: "24"},
        {id:25, day: "25"},
        {id:26, day: "26"},
        {id:27, day: "27"},
        {id:28, day: "28"},
        {id:29, day: "29"},
        {id:30, day: "30"},
        {id:31, day: "31"},
    ]
    const nov = [
        {id:"a", day: ""},
        {id:"b", day: ""},
        {id:"c", day: ""},
        {id:"d", day: ""},
        {id:"e", day: ""},
        {id:1, day: "01"},
        {id:2, day: "02"},
        {id:3, day: "03"},
        {id:4, day: "04"},
        {id:5, day: "05"},
        {id:6, day: "06"},
        {id:7, day: "07"},
        {id:8, day: "08"},
        {id:9, day: "09"},
        {id:10, day: "10"},
        {id:11, day: "11"},
        {id:12, day: "12"},
        {id:13, day: "13"},
        {id:14, day: "14"},
        {id:15, day: "15"},
        {id:16, day: "16"},
        {id:17, day: "17"},
        {id:18, day: "18"},
        {id:19, day: "19"},
        {id:20, day: "20"},
        {id:21, day: "21"},
        {id:22, day: "22"},
        {id:23, day: "23"},
        {id:24, day: "24"},
        {id:25, day: "25"},
        {id:26, day: "26"},
        {id:27, day: "27"},
        {id:28, day: "28"},
        {id:29, day: "29"},
        {id:30, day: "30"},
    ]
    const dec = [
        {id:1, day: "01"},
        {id:2, day: "02"},
        {id:3, day: "03"},
        {id:4, day: "04"},
        {id:5, day: "05"},
        {id:6, day: "06"},
        {id:7, day: "07"},
        {id:8, day: "08"},
        {id:9, day: "09"},
        {id:10, day: "10"},
        {id:11, day: "11"},
        {id:12, day: "12"},
        {id:13, day: "13"},
        {id:14, day: "14"},
        {id:15, day: "15"},
        {id:16, day: "16"},
        {id:17, day: "17"},
        {id:18, day: "18"},
        {id:19, day: "19"},
        {id:20, day: "20"},
        {id:21, day: "21"},
        {id:22, day: "22"},
        {id:23, day: "23"},
        {id:24, day: "24"},
        {id:25, day: "25"},
        {id:26, day: "26"},
        {id:27, day: "27"},
        {id:28, day: "28"},
        {id:29, day: "29"},
        {id:30, day: "30"},
        {id:31, day: "31"},
    ]
    function minus(){
        if(monthNow <= 0){
            setMonthNow(11)
        }else{
            setMonthNow(monthNow - 1)
        }
    }
    function plus(){
        if(monthNow >= 11){
            setMonthNow(0)
        }else{
            setMonthNow(monthNow + 1)
        }
    }

  return (
    <div className={cl.calendar}>
        <div className={cl.header}>
            <svg onClick={minus} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 17.75C13.9015 17.7505 13.8038 17.7313 13.7128 17.6935C13.6218 17.6557 13.5392 17.6001 13.47 17.53L8.47 12.53C8.32955 12.3894 8.25066 12.1988 8.25066 12C8.25066 11.8013 8.32955 11.6107 8.47 11.47L13.47 6.47003C13.6122 6.33755 13.8002 6.26543 13.9945 6.26885C14.1888 6.27228 14.3742 6.35099 14.5116 6.48841C14.649 6.62582 14.7277 6.81121 14.7312 7.00551C14.7346 7.19981 14.6625 7.38785 14.53 7.53003L10.06 12L14.53 16.47C14.6704 16.6107 14.7493 16.8013 14.7493 17C14.7493 17.1988 14.6704 17.3894 14.53 17.53C14.4608 17.6001 14.3782 17.6557 14.2872 17.6935C14.1962 17.7313 14.0985 17.7505 14 17.75Z" fill="black"/>
            </svg>
            <div className={cl.mounth}>{nowMonth[monthNow].m}</div>
            <svg onClick={plus} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 17.75C9.90147 17.7505 9.80383 17.7313 9.71282 17.6935C9.62181 17.6557 9.53926 17.6001 9.47001 17.53C9.32956 17.3894 9.25067 17.1988 9.25067 17C9.25067 16.8013 9.32956 16.6107 9.47001 16.47L13.94 12L9.47001 7.53003C9.33753 7.38785 9.26541 7.19981 9.26884 7.00551C9.27226 6.81121 9.35098 6.62582 9.48839 6.48841C9.6258 6.35099 9.81119 6.27228 10.0055 6.26885C10.1998 6.26543 10.3878 6.33755 10.53 6.47003L15.53 11.47C15.6705 11.6107 15.7494 11.8013 15.7494 12C15.7494 12.1988 15.6705 12.3894 15.53 12.53L10.53 17.53C10.4608 17.6001 10.3782 17.6557 10.2872 17.6935C10.1962 17.7313 10.0986 17.7505 10 17.75Z" fill="black"/>
            </svg>
        </div>
        <div className={cl.main}>
            <div className={cl.day1}>П</div>
            <div className={cl.day1}>В</div>
            <div className={cl.day1}>С</div>
            <div className={cl.day1}>Ч</div>
            <div className={cl.day1}>П</div>
            <div className={cl.day1}>С</div>
            <div className={cl.day1}>В</div>
            {monthNow == 0 &&
            jan.map(sep =>
                <div key={sep.id} className={sep.id == date && month == monthNow ? rootClasses : dayClass}>{sep.day}</div>
            )
            }
            {monthNow == 1 &&
            fab.map(sep =>
                <div key={sep.id} className={sep.id == date && month == monthNow ? rootClasses : dayClass}>{sep.day}</div>
            )
            }
            {monthNow == 2 &&
            mar.map(sep =>
                <div key={sep.id} className={sep.id == date && month == monthNow ? rootClasses : dayClass}>{sep.day}</div>
            )
            }
            {monthNow == 3 &&
            apr.map(sep =>
                <div key={sep.id} className={sep.id == date && month == monthNow ? rootClasses : dayClass}>{sep.day}</div>
            )
            }
            {monthNow == 4 &&
            may.map(sep =>
                <div key={sep.id} className={sep.id == date && month == monthNow ? rootClasses : dayClass}>{sep.day}</div>
            )
            }
            {monthNow == 5 &&
            jun.map(sep =>
                <div key={sep.id} className={sep.id == date && month == monthNow ? rootClasses : dayClass}>{sep.day}</div>
            )
            }
            {monthNow == 6 &&
            jul.map(sep =>
                <div key={sep.id} className={sep.id == date && month == monthNow ? rootClasses : dayClass}>{sep.day}</div>
            )
            }
            {monthNow == 7 &&
            aug.map(sep =>
                <div key={sep.id} className={sep.id == date && month == monthNow ? rootClasses : dayClass}>{sep.day}</div>
            )
            }
            {monthNow == 8 &&
            sept.map(sep =>
                <div key={sep.id} className={sep.id == date && month == monthNow ? rootClasses : dayClass}>{sep.day}</div>
            )
            }
            {monthNow == 9 &&
            oct.map(sep =>
                <div key={sep.id} className={sep.id == date && month == monthNow ? rootClasses : dayClass}>{sep.day}</div>
            )
            }
            {monthNow == 10 &&
            nov.map(sep =>
                <div key={sep.id} className={sep.id == date && month == monthNow ? rootClasses : dayClass}>{sep.day}</div>
            )
            }
            {monthNow == 11 &&
            dec.map(sep =>
                <div key={sep.id} className={sep.id == date && month == monthNow ? rootClasses : dayClass}>{sep.day}</div>
            )
            }
        </div>
    </div>
  )
}

export default Calendar