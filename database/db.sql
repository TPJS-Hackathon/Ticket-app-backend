CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    hashedPassword VARCHAR(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO
       users (email, hashedPassword)
VALUES
       (
              'johndoe@example.com',
              '4b45cc4b2c1d54cd4fa7389ac9f63e7a'
       ),
       (
              'donaldbaley@example.com',
              '5v6EMSkESzQOlyKiBCPvvRgw4ymU7pWF'
       ),
       (
              'charlesmoore@example.com',
              'VxR0wNHff3AWvYHEYsf8UGpz5uDf03Bk'
       );



CREATE TABLE tickets (
    CI_Name VARCHAR(255) NOT NULL,
    CI_CAT VARCHAR(255) NOT NULL, 
    CI_Subcat VARCHAR(255) NOT NULL, 
    WBS VARCHAR(255) NOT NULL, 
    Incident_ID VARCHAR(255) NOT NULL,
    Status VARCHAR(255) NOT NULL,
    Impact TEXT NOT NULL, 
    Urgency INT NOT NULL, 
    Priority FLOAT NULL, 
    number_cnt FLOAT NOT NULL, 
    Category VARCHAR(255) NOT NULL, 
    KB_number VARCHAR(255) NOT NULL, 
    Alert_Status VARCHAR(255) NOT NULL, 
    No_of_Reassignments FLOAT NOT NULL, 
    Open_Time VARCHAR(255) NOT NULL,
    Reopen_Time VARCHAR(255) NULL,
    Resolved_Time VARCHAR(255), 
    Close_Time VARCHAR(255), 
    Handle_Time_hrs VARCHAR(255) NOT NULL, 
    Closure_Code VARCHAR(255) NOT NULL, 
    No_of_Related_Interactions FLOAT NOT NULL, 
    Related_Interaction VARCHAR(255) NOT NULL, 
    No_of_Related_Incidents FLOAT NULL, 
    No_of_Related_Changes FLOAT NULL, 
    Related_Change VARCHAR(255) NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;