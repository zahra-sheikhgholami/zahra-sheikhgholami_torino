# 🛍️ Torino App

این پروژه یک وبسایت **رزرو و جستجوی تورهای داخلی و خارجی** است که کاربران می‌توانند تورهای مختلف را بر اساس **مبدا، مقصد و تاریخ شروع و پایان** جستجو کنند. پروژه با استفاده از **Next.js**، **React** و **Tailwind CSS** ساخته شده و تجربه کاربری ساده و جذابی ارائه می‌دهد.

---

![صفحه اصلی سایت](./public/screenshot/screenshot_1.webp)
![صفحه جزییات تور](./public/screenshot/screenshot_2.webp)
![صفحه اصلی سایت در موبایل](./public/screenshot/screenshot_3.webp)

---

## ✨ قابلیت‌ها
- ورود با OTP به شماره موبایل و دریافت **Access Token ** و  **Refresh Token** برای امنیت و مدیریت نشست کاربر
- جستجوی تورهای داخلی و خارجی بر اساس **مبدا، مقصد و تاریخ شروع و پایان**
- مشاهده جزئیات هر تور شامل برنامه سفر و توضیحات کامل
- رابط کاربری **ریسپانسیو**
- انتخاب و مدیریت **تاریخ شمسی** برای تورها

---

## 🛠️ تکنولوژی‌ها و پکیج‌ها
- React.js 18 / Next.js 15 
- Tailwind CSS 4 
- React Query 
- React Hook Form + Yup 
- Jalali-moment / React Multi Date Picker 
- React Toastify
- Swiper.js
- Iconsax React

---

## 🚀 ساختار کلی پروژه

```bash
src/
 ┣ components/     # کامپوننت‌های قابل استفاده مجدد در بخش‌های مختلف سایت
 ┣ app/            # صفحات و مسیرهای اصلی برنامه (Next.js App Router)
 ┣ core/           # فایل‌های کمکی، تنظیمات و ثابت‌ها (constants & utils)
 ┣ hooks/          # هوک‌های سفارشی برای مدیریت برنامه
 ┣ provider/       # Providerها برای React Query. 
 ┗ styles/         # استایل‌ها و تنظیمات مربوط به Tailwind CSS
 ```
 
---

## 🚀 اجرای پروژه


1. **کلون کردن پروژه  :**

```bash
git clone https://github.com/zahra-sheikhgholami/zahra-sheikhgholami_torino.git
```
2. **نصب وابستگی ها  :**
```bash
npm install
```
3. **اجرای پروژه  :**
```bash
npm run dev
```