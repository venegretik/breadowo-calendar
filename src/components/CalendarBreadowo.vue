
<template>
    <div class="container">
        <h1>Bredowo</h1>
        <div class="today__birthday">
            <p>События сегодня: {{ todayDay[0]?.text ? todayDay[0]?.text : "Ничего интересного :(" }}</p>
        </div>
        <div class="swiper__calendar">
            <div ref="prev" class="left__arrow"><img src="/img/arrow.png" alt=""></div>
            <Swiper ref="swiper" :initialSlide="dateNow[1] - 1" :modules="modules"
                :navigation="{ prevEl: prev, nextEl: next, }" :slides-per-view="1" :space-between="50">
                <swiper-slide v-for="(items, index) in arrayCalendar" :key="items">
                    <h2 class="title__mounth">{{ mounthCalendar[index].nameMounth }}</h2>
                    <div class="table">
                        <div class="item" :class="{ active__item: item.activeDay }" v-for="item in items" :key="item">
                            <p>{{ item.day }}</p>
                        </div>
                    </div>
                </swiper-slide>
            </Swiper>
            <div ref="next" class="right__arrow"><img src="/img/arrow.png" alt=""></div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';
export default {
    /* eslint-disable */
    data() {
        return {
            arrayCalendar: [

            ],
            mounthCalendar: [{
                nameMounth: 'Январь',
                day: 31
            }, {
                nameMounth: 'Февраль',
                day: 28
            }, {
                nameMounth: 'Март',
                day: 31
            }, {
                nameMounth: 'Апрель',
                day: 30
            }, {
                nameMounth: 'Май',
                day: 31
            }, {
                nameMounth: 'Июнь',
                day: 30
            }, {
                nameMounth: 'Июль',
                day: 31
            }, {
                nameMounth: 'Август',
                day: 31
            }, {
                nameMounth: 'Сентябрь',
                day: 30
            }, {
                nameMounth: 'Октябрь',
                day: 31
            }, {
                nameMounth: 'Ноябрь',
                day: 30
            }, {
                nameMounth: 'Декабрь',
                day: 31
            }],
        }
    },
    methods: {
        addedDaysToCalendar(days, index) {
            for (let j = 1; j <= days; j++) {
                let active = false;
                this.activeDays.forEach(el => {
                    if (j + '.' + (index + 1) == el.date) {
                        this.arrayCalendar[index].push({
                            day: j,
                            activeDay: true,
                            text: el.text
                        })
                        active = true;
                    }
                })
                if (!active) {
                    this.arrayCalendar[index].push({
                        day: j,
                        activeDay: false
                    })

                }
            }
        },
        addedMountToCalendar() {
            this.mounthCalendar.forEach((element, key) => {
                this.arrayCalendar[key] = new Array();
                this.addedDaysToCalendar(element.day, key);
            });
        },
    },
    mounted() {
        this.addedMountToCalendar();
    },
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        const dateNow = new Date().toLocaleDateString().split('.');
        const prev = ref(null);
        const next = ref(null);
        let activeDays = [{
            text: 'День рождения Дмитрия Кицуне',
            date: '20.10'
        }];
        activeDays.push({
            text: '',
            date: dateNow[0] + '.' + (dateNow[1])
        });
        let todayDay = activeDays.filter(el => el.date == dateNow[0] + '.' + dateNow[1])
        return {
            modules: [Navigation],
            prev,
            next,
            dateNow,
            activeDays,
            todayDay
        };
    },
}
</script>

<style>
.item {
    border: 1px solid Red;
    max-width: 14.2857%;
    border-collapse: collapse;
    height: 57.14px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.modal__container {
    position: absolute;
    left: 0px;
    z-index: 10;
    top: 0px;
    width: 200px;
}

.table {
    margin: 0px auto;
    display: flex;
    max-width: 400px;
    flex-wrap: wrap;
}

.title__mounth {
    text-align: center;
    margin-bottom: 20px;
}

.swiper__calendar {
    max-width: 400px;
    display: flex;
    column-gap: 10px;
    align-items: center;
    margin: 0px auto;
}

.left__arrow img {
    width: 30px;
    transform: rotate(-180deg);
    cursor: pointer;
}

.right__arrow img {
    width: 30px;
    cursor: pointer;
}

.active__item {
    background-color: red;
}

.container{
    padding: 0px 40px;
}
</style>

