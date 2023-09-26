import { useMutation, useQuery } from "react-query";
import { fetchAPI, submitAPI } from "../../apis/mockApi";
import { LoadingWrapper } from "../Loading";
import { useState } from "react";

type BookingFormProps = {
  timeOptions?: string[];
};

export default function BookingForm({ timeOptions }: BookingFormProps) {
  const [date, setDate] = useState<Date>();
  const query = useQuery(["booking", date], () => fetchAPI(date));

  const submit = useMutation({ mutationFn: submitAPI });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    setDate(new Date(date));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit.mutateAsync().then(() => alert("Success!"));
  };

  return (
    <LoadingWrapper isLoading={query.isLoading}>
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={onSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={onChange} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time ">
          {query.data?.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </LoadingWrapper>
  );
}
