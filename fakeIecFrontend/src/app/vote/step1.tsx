import React, { useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Styles from '../_styles/vote/vote.module.scss';

interface Step1Props {
  onNext: (data: Step1FormData) => void;
  defaultValues: Step1FormData;
}

interface Step1FormData {
  firstName: string;
  lastName: string;
  ethnicity: string;
  gender: string;
  province: string;
  district: string;
}

const addressesArray = [
  ["Limpopo", ["Vhembe", "Mopani", "Capricorn", "Sekhukhune", "Waterburg"]],
  ["Kwa-zulu Natal", ["Amajuba", "Ilembe", "Sisonke", "Ugu", "uMkhanyakude", "uMgungundlovu", "uMzinyathi", "Uthukela", "Uthungulu", "Zululand"]],
  ["Gauteng", ["Sedibeng", "West rand", "Johannesburg", "Tswane", "Ekurhuleni", "Metsweding"]],
  ["Free State", ["Fezile Dabi", "Lejweleputswa", "Thabo Mofutsanyana", "Xhariep"]],
  ["North West", ["Bojanala Platinum", "Dr Kenneth Kaunda", "Dr Ruth Segomotsi Mompati", "Ngaka Modiri Molema"]],
  ["Northern Cape", ["Frances Baard", "John Taolo Gaetsewe", "Namakwa", "Pixley Ka Seme", "ZF Mgcawu"]],
  ["Mpumalanga", ["Ehlanzeni", "Gert Sibande", "Nkangala"]],
  ["Eastern Cape", ["Buffalo City Metropolitan", "Nelson Mandela Bay Metropolitan", "Alfred Nzo", "Amathole", "Chris Hani", "Joe Gqabi", "OR Tambo", "Sarah Baartman"]],
  ["Western Cape", ["City of Cape Town Metropolitan", "Cape Winelands", "Central Karoo", "Garden Route", "Overberg", "West Coast"]]
];

const Step1: React.FC<Step1Props> = ({ onNext, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch
  } = useForm<Step1FormData>({ defaultValues });

  const [selectedProvince, setSelectedProvince] = useState<string>(defaultValues.province);

  const onSubmit: SubmitHandler<Step1FormData> = (data) => {
    onNext(data);
  };

  const provinceOptions = addressesArray.map((item) => item[0]);
  const districtOptions = selectedProvince ? addressesArray.find((item) => item[0] === selectedProvince)?.[1] : [];

  return (
    <div className={`${Styles.step1} `}>
      <Container>
        <Row>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                className={`${Styles.step1inputBox} form-control`}
                {...register('firstName', { required: 'First name is required' })}
              />
              {errors.firstName && (
                <span className={Styles.spanError}>{errors.firstName.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                className={`${Styles.step1inputBox} form-control`}
                {...register('lastName', { required: 'Last name is required' })}
              />
              {errors.lastName && (
                <span className={Styles.spanError}>{errors.lastName.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="ethnicity">Ethnicity</label>
              <Controller
                control={control}
                name="ethnicity"
                render={({ field: { value, onChange } }) => (
                  <select
                    className={`${Styles.step1inputBox} form-control`}
                    onChange={onChange}
                    value={value}
                  >
                    <option></option>
                    <option value="black">Black</option>
                    <option value="coloured">Coloured</option>
                    <option value="white">White</option>
                    <option value="indian">Indian</option>
                  </select>
                )}
              />
              {errors.ethnicity && (
                <span className={Styles.spanError}>{errors.ethnicity.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="gender">Gender</label>
              <Controller
                control={control}
                name="gender"
                render={({ field: { value, onChange } }) => (
                  <select
                    className={`${Styles.step1inputBox} form-control`}
                    onChange={onChange}
                    value={value}
                  >
                    <option></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                )}
              />
              {errors.gender && (
                <span className={Styles.spanError}>{errors.gender.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="province">Province</label>
              <Controller
                control={control}
                name="province"
                render={({ field: { value, onChange } }) => (
                  <select
                    className={`${Styles.step1inputBox} form-control`}
                    onChange={(e) => {
                      onChange(e);
                      setSelectedProvince(e.target.value);
                    }}
                    value={value}
                  >
                    <option></option>
                    {provinceOptions.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.province && (
                <span className={Styles.spanError}>{errors.province.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="district">District</label>
              <Controller
                control={control}
                name="district"
                render={({ field: { value, onChange } }) => (
                  <select
                    className={`${Styles.step1inputBox} form-control`}
                    onChange={onChange}
                    value={value}
                  >
                    <option></option>
                    {districtOptions?.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.district && (
                <span className={Styles.spanError}>{errors.district.message}</span>
              )}
            </div>

            <Button className={`${Styles.nextButton} shadow-lg`} type="submit">
              Next
            </Button>
          </form>
        </Row>
      </Container>
    </div>
  );
};

export default Step1;
