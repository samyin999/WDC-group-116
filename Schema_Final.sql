CREATE TABLE checkin (
  id int PRIMARY KEY AUTO_INCREMENT,
  venue int,
  user int,
  checkinTime datetime
);

CREATE TABLE userAccount (
  id int PRIMARY KEY AUTO_INCREMENT,
  address int,
  firstName varchar(255),
  lastName varchar(255),
  accountCreationTime timestamp DEFAULT (now()),
  dateOfBirth date,
  email varchar(255),
  mobileNumber varchar(255),
  hasCovid boolean
);

CREATE TABLE venueAccount (
  id int PRIMARY KEY AUTO_INCREMENT,
  venueName varchar(255),
  contactNo int,
  lat float,
  lon float,
  caseTotal int,
  hotSpotStatus bool,
  email varchar(255)
);

CREATE TABLE adminAccount (
  id int PRIMARY KEY AUTO_INCREMENT,
  email varchar(255),
  firstName varchar(255),
  lastName varchar(255),
  accountCreationTime timestamp DEFAULT (now()),
  dateOfBirth date,
  mobileNumber varchar(255)
);

CREATE TABLE managerAccount (
  id int PRIMARY KEY AUTO_INCREMENT,
  firstName varchar(255),
  lastName varchar(255),
  accountCreationTime timestamp DEFAULT (now()),
  dateOfBirth date,
  email varchar(255),
  mobileNumber varchar(255)
);

CREATE TABLE address (
  id int PRIMARY KEY AUTO_INCREMENT,
  addressLine1 varchar(255),
  addressLine2 varchar(255),
  suburb varchar(255),
  postCode int
);


ALTER TABLE userAccount ADD CONSTRAINT CHK_userAccount CHECK (mobileNumber >= 10000000 AND mobileNumber <= 999999999999);

ALTER TABLE venueAccount ADD CONSTRAINT CHK_venueAccount CHECK (contactNo >= 1 AND contactNo <= 999999999999 AND lat >= -90 AND lat <= 90 AND lon >= -180 AND lon <= 180);

ALTER TABLE adminAccount ADD CONSTRAINT CHK_adminAccount CHECK (email LIKE '%@%');

ALTER TABLE address ADD CONSTRAINT CHK_Address CHECK (postCode >= 1000 AND postCode <= 9999);



ALTER TABLE checkin ADD FOREIGN KEY (user) REFERENCES userAccount (id);

ALTER TABLE checkin ADD FOREIGN KEY (venue) REFERENCES venueAccount (id);

ALTER TABLE userAccount ADD FOREIGN KEY (address) REFERENCES address (id);

ALTER TABLE adminAccount ADD FOREIGN KEY (id) REFERENCES userAccount (id);

ALTER TABLE adminAccount ADD FOREIGN KEY (id) REFERENCES venueAccount (id);

ALTER TABLE userAccount ADD FOREIGN KEY (id) REFERENCES address (id);

ALTER TABLE venueAccount ADD FOREIGN KEY (id) REFERENCES address (id);

