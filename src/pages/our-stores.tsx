import React, { useState } from "react";
import OurServices from "../components/OurServices";
import styles from "../styles/Store.module.css";

export default function Stores() {
  const locations = [
    {
      id: "1",
      name: "Kathmandu-Nepal",
      address: "PO Box 2816, Baneshwor, Kathmandu 98509, Nepal",
      phone: "489858458474656",
      email: "technostore.kathmandu@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31397712412!2d85.3261328!3d27.708960349999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1680332874377!5m2!1sen!2snp",
    },
    {
      name: "India",
      address: "PO Box 234, Falmouth, Cornwall TR11 9GE, India",
      id: "2",
      phone: "49857947664545",
      email: "technostore.india@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31063981.812039926!2d68.14711017603572!3d23.198674827420413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e7e17c05233b83%3A0x3a60aad5c46b5a07!2sIndia!5e0!3m2!1sen!2snp!4v1680460197117!5m2!1sen!2snp",
    },

    {
      id: "3",
      name: "Pakistan",
      address: "PO Box 455, Richmond, British Columbia V6Y 3V3, Pakistan",
      phone: "652143269824",
      email: "technostore.pakistan@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8491834.680708338!2d64.17352884625467!3d29.898212391599514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df96b62ae8e87f%3A0x7fed4b08e4c7a0d4!2sPakistan!5e0!3m2!1sen!2snp!4v1680460293588!5m2!1sen!2snp",
    },

    {
      id: "4",
      name: "Usa",
      address: "PO Box 143, Lomé, Usa",
      phone: "874562354342",
      email: "technostore.usa@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10285756.9865575!2d-110.64564516287158!3d38.04790439604541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f39ecf42e69%3A0x3029ac9c19aeb8f6!2sUnited%20States!5e0!3m2!1sen!2snp!4v1680460372768!5m2!1sen!2snp",
    },

    {
      id: "5",
      name: "Australia",
      address: "PO Box 8034, Loki, Australia",
      phone: "152434956456",
      email: "technostore.australia@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29624177.65104267!2d115.22429419587687!3d-24.992210318458415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2snp!4v1680333727227!5m2!1sen!2snp",
    },

    {
      id: "6",
      name: "Canada",
      address: "PO Box 125, Papeete, Tahiti, Canada",
      phone: "1653246123",
      email: "technostore.canada@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18876493.125331298!2d-113.72257473351921!3d54.722651652313836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2snp!4v1680333709260!5m2!1sen!2snp",
    },

    {
      id: "7",
      name: "Bangladesh",
      address: "PO Box 3024, Christchurch, Bangladesh",
      phone: "291327328746",
      email: "technostore.bangladesh@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746840.9640401015!2d88.10065468490832!3d23.49563137514453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2snp!4v1680333690324!5m2!1sen!2snp",
    },

    {
      id: "8",
      name: "United Kingdom",
      address: "PO Box FL33132, Biscayne Boulevard, Miami, FL 33132, United Kingdom",
      phone: "3754673546",
      email: "technostore.uk@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9552226.40127723!2d-13.42676336579827!3d54.23165733260205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2snp!4v1680333672611!5m2!1sen!2snp",
    },

    {
      id: "9",
      name: "France",
      address: "PO Box 262, Salmiya, France",
      phone: "5234234436512",
      email: "technostore.france@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5661876.661971421!2d-2.435148259869562!3d46.13903191906813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sen!2snp!4v1680333603231!5m2!1sen!2snp",
    },

    {
      id: "10",
      name: "Russia",
      address: "PO Box 7335, Kampala, Russia",
      phone: "901302983846",
      email: "technostore.russia@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42182692.991458856!2d68.81738574499518!3d49.81187491168497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x453c569a896724fb%3A0x1409fdf86611f613!2sRussia!5e0!3m2!1sen!2snp!4v1680333593828!5m2!1sen!2snp",
    },

    {
      id: "11",
      name: "Ireland",
      address: "PO Box 362, Muscat, Ireland",
      phone: "94739857475657",
      email: "technostore.ireland@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441747.1209239485!2d-12.817647841324005!3d53.29815672245001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4859bae45c4027fb%3A0xcf7c1234cedbf408!2sIreland!5e0!3m2!1sen!2snp!4v1680333524078!5m2!1sen!2snp",
    },

    {
      id: "12",
      name: "Singapore",
      address: "PO Box 101, Mogadishu, Singapore",
      phone: "92834858y574675",
      email: "technostore.singapore@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036273!2d103.70416522643677!3d1.3143393784848247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2snp!4v1680333450426!5m2!1sen!2snp",
    },

    {
      id: "13",
      name: "Turkey",
      address: "PO Box 6401, Doha, Turkey",
      phone: "8745485554646",
      email: "technostore.turkey@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6342301.00043755!2d35.129329549999994!3d39.0876459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1sen!2snp!4v1680333379065!5m2!1sen!2snp",
    },
  ];

  const [locationSelected, setLocationSelected] = useState(locations[0]);
  const selectNepal = () => {
    setLocationSelected(locations[0]);
  };

  const selectIndia = () => {
    setLocationSelected(locations[1]);
  };

  const selectPakistan = () => {
    setLocationSelected(locations[2]);
  };

  const selectUsa = () => {
    setLocationSelected(locations[3]);
  };

  const selectAustralia = () => {
    setLocationSelected(locations[4]);
  };

  const selectCanada = () => {
    setLocationSelected(locations[5]);
  };

  const selectBangladesh = () => {
    setLocationSelected(locations[6]);
  };

  const selectUk = () => {
    setLocationSelected(locations[7]);
  };

  const selectFrance = () => {
    setLocationSelected(locations[8]);
  };

  const selectRussia = () => {
    setLocationSelected(locations[9]);
  };

  const selectIreland = () => {
    setLocationSelected(locations[10]);
  };

  const selectSingapore = () => {
    setLocationSelected(locations[11]);
  };

  const selectTurkey = () => {
    setLocationSelected(locations[12]);
  };

  console.log(locationSelected);

  return (
    <div>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row  w-100">
          <div className="col-12 col-md-3 p-0  border">
            <p className="text-center h5  bg_dark color-white py-3">Our Locations</p>

            <p
              onClick={selectNepal}
              className={`${styles.location_name} cursor-pointer py-2 px-2 no-selection color-black`}>
              Kathmandu-Nepal
            </p>

            <p
              onClick={selectIndia}
              className={`${styles.location_name} cursor-pointer py-2 px-2 no-selection color-black`}>
              India
            </p>

            <p
              onClick={selectPakistan}
              className={`${styles.location_name} cursor-pointer py-2 px-2 no-selection color-black`}>
              Pakistan
            </p>

            <p
              onClick={selectUsa}
              className={`${styles.location_name} cursor-pointer py-2 px-2 no-selection color-black`}>
              USA
            </p>

            <p
              onClick={selectAustralia}
              className={`${styles.location_name} cursor-pointer py-2 px-2 no-selection color-black`}>
              Australia
            </p>

            <p
              onClick={selectCanada}
              className={`${styles.location_name} cursor-pointer py-2 px-2 no-selection color-black`}>
              Canada
            </p>

            <p
              onClick={selectBangladesh}
              className={`${styles.location_name} cursor-pointer py-2 px-2 no-selection color-black`}>
              Bangladesh
            </p>

            <p
              onClick={selectUk}
              className={`${styles.location_name} cursor-pointer py-2 px-2 no-selection color-black`}>
              United Kingdom
            </p>

            <p
              onClick={selectFrance}
              className={`${styles.location_name} cursor-pointer py-2 px-2 no-selection color-black`}>
              France
            </p>

            <p
              onClick={selectRussia}
              className={`${styles.location_name} cursor-pointer py-2 px-2 no-selection color-black`}>
              Russia
            </p>

            <p
              onClick={selectIreland}
              className={`${styles.location_name} cursor-pointer py-2 px-2 no-selection color-black`}>
              Ireland
            </p>

            <p
              onClick={selectSingapore}
              className={`${styles.location_name} cursor-pointer py-2 px-2 no-selection color-black`}>
              Singapore
            </p>

            <p
              onClick={selectTurkey}
              className={`${styles.location_name} cursor-pointer py-2 px-2 no-selection color-black`}>
              Turkey
            </p>
          </div>

          <div className="col-12 col-md-9 p-0 ">
            <iframe
              className="google_map"
              src={locationSelected.map}
              width="100%"
              height="400"
              style={{ border: "6" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="row color-black mt-3 px-0 px-md-3">
              <div className="col-12 col-sm-6">
                <p className="h5 mb-2">Country : {locationSelected.name}</p>
                <p className="h6  mb-2">Address</p>
                <p className="w-50">{locationSelected.address}</p>
              </div>
              <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                <p className="h6">Email</p>
                <p>{locationSelected.email}</p>

                <p className="h6 mt-2">phone</p>
                <p>{locationSelected.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurServices />
    </div>
  );
}
