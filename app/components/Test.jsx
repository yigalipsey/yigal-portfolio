import OutlinedNumberCard from "./OutlinedNumberCard";

export default function Test() {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center p-10">
      <OutlinedNumberCard
        number="03"
        imageSrc="/images/smartsales.jpg"
        title="איך תכל'ס לקנות דירה"
        description="דף מכירה לקורס דיגיטלי"
      />
    </div>
  );
}
