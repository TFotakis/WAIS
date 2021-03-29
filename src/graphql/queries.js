/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const me = /* GraphQL */ `
  query Me {
    me {
      id
      username
      email
      telephone
      surname
      name
      fathers_name
      address
      zip_code
      mobile
      tin
      family_name
      gender
      birthdate
      city
      profilePicture {
        bucket
        region
        key
        name
      }
      preferences
      locale
      files {
        bucket
        region
        key
        name
      }
      createdAt
      updatedAt
    }
  }
`;
export const echo = /* GraphQL */ `
  query Echo($msg: String!) {
    echo(msg: $msg)
  }
`;
export const getOfficesIWorkIn = /* GraphQL */ `
  query GetOfficesIWorkIn(
    $filter: ModelOfficeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getOfficesIWorkIn(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tradeName
        ownerUsername
        address
        office_email
        zip_code
        mobile
        phone
        partnersNumberLimit
        employeesNumberLimit
        verified
        tin
        professionStartDate
        chamberRecordNumber
        insuranceLicenseExpirationDate
        civilLiabilityExpirationDate
        bankAccountInfo
        files {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMyUserCalendarEvents = /* GraphQL */ `
  query GetMyUserCalendarEvents(
    $filter: ModelUserCalendarEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getMyUserCalendarEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        payload
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMySentRequests = /* GraphQL */ `
  query GetMySentRequests(
    $filter: ModelRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getMySentRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        senderUsername
        senderEmail
        receiverUsername
        receiverEmail
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRequestsForMe = /* GraphQL */ `
  query GetRequestsForMe(
    $filter: ModelRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getRequestsForMe(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        senderUsername
        senderEmail
        receiverUsername
        receiverEmail
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmployeeUserProfiles = /* GraphQL */ `
  query GetEmployeeUserProfiles(
    $filter: ModelTradeUserConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getEmployeeUserProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        email
        telephone
        surname
        name
        fathers_name
        address
        zip_code
        mobile
        tin
        family_name
        gender
        birthdate
        city
        profilePicture {
          bucket
          region
          key
          name
        }
        preferences
        locale
        files {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContractorUserProfiles = /* GraphQL */ `
  query GetContractorUserProfiles(
    $filter: ModelTradeUserConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getContractorUserProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        email
        telephone
        surname
        name
        fathers_name
        address
        zip_code
        mobile
        tin
        family_name
        gender
        birthdate
        city
        profilePicture {
          bucket
          region
          key
          name
        }
        preferences
        locale
        files {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomersForOfficeId = /* GraphQL */ `
  query GetCustomersForOfficeId(
    $officeId: ID!
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCustomersForOfficeId(
      officeId: $officeId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tin
        tradeName
        firstName
        lastName
        fathersName
        birthDate
        gender
        email
        mobile
        postcode
        doy
        address
        familyStatus
        files {
          bucket
          region
          key
          name
        }
        driversLicense {
          LicenseID
          DriversLicenseType
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContractsForOfficeId = /* GraphQL */ `
  query GetContractsForOfficeId(
    $officeId: ID!
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getContractsForOfficeId(
      officeId: $officeId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tin
        tradeName
        firstName
        lastName
        fathersName
        birthDate
        gender
        email
        mobile
        postcode
        doy
        address
        familyStatus
        files {
          bucket
          region
          key
          name
        }
        driversLicense {
          LicenseID
          DriversLicenseType
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPartnerOfficeConnectionsForOfficeId = /* GraphQL */ `
  query GetPartnerOfficeConnectionsForOfficeId(
    $officeId: ID!
    $filter: ModelCompanyAccessConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPartnerOfficeConnectionsForOfficeId(
      officeId: $officeId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fromId
        fromTradeName
        toId
        toTradeName
        expirationDate
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserModelPermissionsForOffice = /* GraphQL */ `
  query GetUserModelPermissionsForOffice($officeId: ID!) {
    getUserModelPermissionsForOffice(officeId: $officeId)
  }
`;
export const getUserPagePermissionsForOffice = /* GraphQL */ `
  query GetUserPagePermissionsForOffice($officeId: ID!) {
    getUserPagePermissionsForOffice(officeId: $officeId)
  }
`;
export const listOffices = /* GraphQL */ `
  query ListOffices(
    $filter: ModelOfficeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOffices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tradeName
        ownerUsername
        address
        office_email
        zip_code
        mobile
        phone
        partnersNumberLimit
        employeesNumberLimit
        verified
        tin
        professionStartDate
        chamberRecordNumber
        insuranceLicenseExpirationDate
        civilLiabilityExpirationDate
        bankAccountInfo
        files {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
        officeContracts {
          nextToken
        }
        officeCustomers {
          nextToken
        }
        workforce {
          nextToken
        }
        companyConnections {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getOffice = /* GraphQL */ `
  query GetOffice($id: ID!) {
    getOffice(id: $id) {
      id
      tradeName
      ownerUsername
      address
      office_email
      zip_code
      mobile
      phone
      partnersNumberLimit
      employeesNumberLimit
      verified
      tin
      professionStartDate
      chamberRecordNumber
      insuranceLicenseExpirationDate
      civilLiabilityExpirationDate
      bankAccountInfo
      files {
        bucket
        region
        key
        name
      }
      createdAt
      updatedAt
      officeContracts {
        items {
          id
          contractId
          version
          vehicleNumberPlate
          vehicleId
          voucherId
          customerId
          tradeName
          second_tradeId
          contractorId
          co_name
          co_TRN
          contractState
          insuranceClass
          insuranceCoverage
          insuranceUsage
          duration
          startDate
          endDate
          data
          discount
          jointWorth
          netWorth
          createdAt
          updatedAt
        }
        nextToken
      }
      officeCustomers {
        items {
          id
          tin
          tradeName
          firstName
          lastName
          fathersName
          birthDate
          gender
          email
          mobile
          postcode
          doy
          address
          familyStatus
          createdAt
          updatedAt
        }
        nextToken
      }
      workforce {
        items {
          id
          tradeId
          tradeName
          userId
          username
          pagePermissions
          modelPermissions
          employeeType
          preferences
          createdAt
          updatedAt
        }
        nextToken
      }
      companyConnections {
        items {
          id
          fromId
          fromTradeName
          toId
          toTradeName
          expirationDate
          message
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listTradeByName = /* GraphQL */ `
  query ListTradeByName(
    $tradeName: String
    $ownerUsername: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOfficeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTradeByName(
      tradeName: $tradeName
      ownerUsername: $ownerUsername
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tradeName
        ownerUsername
        address
        office_email
        zip_code
        mobile
        phone
        partnersNumberLimit
        employeesNumberLimit
        verified
        tin
        professionStartDate
        chamberRecordNumber
        insuranceLicenseExpirationDate
        civilLiabilityExpirationDate
        bankAccountInfo
        files {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
        officeContracts {
          nextToken
        }
        officeCustomers {
          nextToken
        }
        workforce {
          nextToken
        }
        companyConnections {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listTradeByOfficeEmail = /* GraphQL */ `
  query ListTradeByOfficeEmail(
    $office_email: String
    $sortDirection: ModelSortDirection
    $filter: ModelOfficeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTradeByOfficeEmail(
      office_email: $office_email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tradeName
        ownerUsername
        address
        office_email
        zip_code
        mobile
        phone
        partnersNumberLimit
        employeesNumberLimit
        verified
        tin
        professionStartDate
        chamberRecordNumber
        insuranceLicenseExpirationDate
        civilLiabilityExpirationDate
        bankAccountInfo
        files {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
        officeContracts {
          nextToken
        }
        officeCustomers {
          nextToken
        }
        workforce {
          nextToken
        }
        companyConnections {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listTradeByOwnerUsername = /* GraphQL */ `
  query ListTradeByOwnerUsername(
    $ownerUsername: String
    $tradeName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOfficeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTradeByOwnerUsername(
      ownerUsername: $ownerUsername
      tradeName: $tradeName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tradeName
        ownerUsername
        address
        office_email
        zip_code
        mobile
        phone
        partnersNumberLimit
        employeesNumberLimit
        verified
        tin
        professionStartDate
        chamberRecordNumber
        insuranceLicenseExpirationDate
        civilLiabilityExpirationDate
        bankAccountInfo
        files {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
        officeContracts {
          nextToken
        }
        officeCustomers {
          nextToken
        }
        workforce {
          nextToken
        }
        companyConnections {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        telephone
        surname
        name
        fathers_name
        address
        zip_code
        mobile
        tin
        family_name
        gender
        birthdate
        city
        profilePicture {
          bucket
          region
          key
          name
        }
        preferences
        locale
        files {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
        officeConnections {
          nextToken
        }
        callendarEvents {
          nextToken
        }
        requestsSentByMe {
          nextToken
        }
        requestsForMe {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      id
      username
      email
      telephone
      surname
      name
      fathers_name
      address
      zip_code
      mobile
      tin
      family_name
      gender
      birthdate
      city
      profilePicture {
        bucket
        region
        key
        name
      }
      preferences
      locale
      files {
        bucket
        region
        key
        name
      }
      createdAt
      updatedAt
      officeConnections {
        items {
          id
          tradeId
          tradeName
          userId
          username
          pagePermissions
          modelPermissions
          employeeType
          preferences
          createdAt
          updatedAt
        }
        nextToken
      }
      callendarEvents {
        items {
          id
          username
          payload
          createdAt
          updatedAt
        }
        nextToken
      }
      requestsSentByMe {
        items {
          id
          senderUsername
          senderEmail
          receiverUsername
          receiverEmail
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      requestsForMe {
        items {
          id
          senderUsername
          senderEmail
          receiverUsername
          receiverEmail
          type
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listUserProfileByEmail = /* GraphQL */ `
  query ListUserProfileByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfileByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        email
        telephone
        surname
        name
        fathers_name
        address
        zip_code
        mobile
        tin
        family_name
        gender
        birthdate
        city
        profilePicture {
          bucket
          region
          key
          name
        }
        preferences
        locale
        files {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
        officeConnections {
          nextToken
        }
        callendarEvents {
          nextToken
        }
        requestsSentByMe {
          nextToken
        }
        requestsForMe {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listUserProfileByUsername = /* GraphQL */ `
  query ListUserProfileByUsername(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfileByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        email
        telephone
        surname
        name
        fathers_name
        address
        zip_code
        mobile
        tin
        family_name
        gender
        birthdate
        city
        profilePicture {
          bucket
          region
          key
          name
        }
        preferences
        locale
        files {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
        officeConnections {
          nextToken
        }
        callendarEvents {
          nextToken
        }
        requestsSentByMe {
          nextToken
        }
        requestsForMe {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listVehicles = /* GraphQL */ `
  query ListVehicles(
    $filter: ModelVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        numberPlate
        officeId
        tradeName
        color
        manufacturer
        model
        vehicle_owner
        trim
        fuelType
        usage
        displacement
        eurotax
        firstRegistrationDate
        passengers
        purchaseDate
        taxableHorsepower
        vin
        value
        file {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVehicle = /* GraphQL */ `
  query GetVehicle($id: ID!) {
    getVehicle(id: $id) {
      id
      numberPlate
      officeId
      tradeName
      color
      manufacturer
      model
      vehicle_owner
      trim
      fuelType
      usage
      displacement
      eurotax
      firstRegistrationDate
      passengers
      purchaseDate
      taxableHorsepower
      vin
      value
      file {
        bucket
        region
        key
        name
      }
      createdAt
      updatedAt
    }
  }
`;
export const listVehiclesByTradeName = /* GraphQL */ `
  query ListVehiclesByTradeName(
    $tradeName: String
    $numberPlate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVehiclesByTradeName(
      tradeName: $tradeName
      numberPlate: $numberPlate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        numberPlate
        officeId
        tradeName
        color
        manufacturer
        model
        vehicle_owner
        trim
        fuelType
        usage
        displacement
        eurotax
        firstRegistrationDate
        passengers
        purchaseDate
        taxableHorsepower
        vin
        value
        file {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listVehiclesByOwner = /* GraphQL */ `
  query ListVehiclesByOwner(
    $vehicle_owner: String
    $tradeName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVehiclesByOwner(
      vehicle_owner: $vehicle_owner
      tradeName: $tradeName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        numberPlate
        officeId
        tradeName
        color
        manufacturer
        model
        vehicle_owner
        trim
        fuelType
        usage
        displacement
        eurotax
        firstRegistrationDate
        passengers
        purchaseDate
        taxableHorsepower
        vin
        value
        file {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listContracts = /* GraphQL */ `
  query ListContracts(
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContracts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        contractId
        version
        vehicleNumberPlate
        vehicleId
        voucherId
        customerId
        tradeName
        second_tradeId
        contractorId
        co_name
        co_TRN
        contractState
        insuranceClass
        insuranceCoverage
        insuranceUsage
        duration
        startDate
        endDate
        data
        discount
        jointWorth
        netWorth
        driversLicense {
          LicenseID
          DriversLicenseType
        }
        createdAt
        updatedAt
        vehicle {
          id
          numberPlate
          officeId
          tradeName
          color
          manufacturer
          model
          vehicle_owner
          trim
          fuelType
          usage
          displacement
          eurotax
          firstRegistrationDate
          passengers
          purchaseDate
          taxableHorsepower
          vin
          value
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getContract = /* GraphQL */ `
  query GetContract($id: ID!) {
    getContract(id: $id) {
      id
      contractId
      version
      vehicleNumberPlate
      vehicleId
      voucherId
      customerId
      tradeName
      second_tradeId
      contractorId
      co_name
      co_TRN
      contractState
      insuranceClass
      insuranceCoverage
      insuranceUsage
      duration
      startDate
      endDate
      data
      discount
      jointWorth
      netWorth
      driversLicense {
        LicenseID
        DriversLicenseType
        Category {
          category
          issueDate
          expiresAt
        }
      }
      createdAt
      updatedAt
      vehicle {
        id
        numberPlate
        officeId
        tradeName
        color
        manufacturer
        model
        vehicle_owner
        trim
        fuelType
        usage
        displacement
        eurotax
        firstRegistrationDate
        passengers
        purchaseDate
        taxableHorsepower
        vin
        value
        file {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const listContractsByTradeName = /* GraphQL */ `
  query ListContractsByTradeName(
    $tradeName: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContractsByTradeName(
      tradeName: $tradeName
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contractId
        version
        vehicleNumberPlate
        vehicleId
        voucherId
        customerId
        tradeName
        second_tradeId
        contractorId
        co_name
        co_TRN
        contractState
        insuranceClass
        insuranceCoverage
        insuranceUsage
        duration
        startDate
        endDate
        data
        discount
        jointWorth
        netWorth
        driversLicense {
          LicenseID
          DriversLicenseType
        }
        createdAt
        updatedAt
        vehicle {
          id
          numberPlate
          officeId
          tradeName
          color
          manufacturer
          model
          vehicle_owner
          trim
          fuelType
          usage
          displacement
          eurotax
          firstRegistrationDate
          passengers
          purchaseDate
          taxableHorsepower
          vin
          value
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listContractsByVehicleNumberPlates = /* GraphQL */ `
  query ListContractsByVehicleNumberPlates(
    $vehicleNumberPlate: String
    $tradeName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContractsByVehicleNumberPlates(
      vehicleNumberPlate: $vehicleNumberPlate
      tradeName: $tradeName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contractId
        version
        vehicleNumberPlate
        vehicleId
        voucherId
        customerId
        tradeName
        second_tradeId
        contractorId
        co_name
        co_TRN
        contractState
        insuranceClass
        insuranceCoverage
        insuranceUsage
        duration
        startDate
        endDate
        data
        discount
        jointWorth
        netWorth
        driversLicense {
          LicenseID
          DriversLicenseType
        }
        createdAt
        updatedAt
        vehicle {
          id
          numberPlate
          officeId
          tradeName
          color
          manufacturer
          model
          vehicle_owner
          trim
          fuelType
          usage
          displacement
          eurotax
          firstRegistrationDate
          passengers
          purchaseDate
          taxableHorsepower
          vin
          value
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listContractsByCustomerId = /* GraphQL */ `
  query ListContractsByCustomerId(
    $customerId: String
    $tradeName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContractsByCustomerId(
      customerId: $customerId
      tradeName: $tradeName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contractId
        version
        vehicleNumberPlate
        vehicleId
        voucherId
        customerId
        tradeName
        second_tradeId
        contractorId
        co_name
        co_TRN
        contractState
        insuranceClass
        insuranceCoverage
        insuranceUsage
        duration
        startDate
        endDate
        data
        discount
        jointWorth
        netWorth
        driversLicense {
          LicenseID
          DriversLicenseType
        }
        createdAt
        updatedAt
        vehicle {
          id
          numberPlate
          officeId
          tradeName
          color
          manufacturer
          model
          vehicle_owner
          trim
          fuelType
          usage
          displacement
          eurotax
          firstRegistrationDate
          passengers
          purchaseDate
          taxableHorsepower
          vin
          value
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      tin
      tradeName
      firstName
      lastName
      fathersName
      birthDate
      gender
      email
      mobile
      postcode
      doy
      address
      familyStatus
      files {
        bucket
        region
        key
        name
      }
      driversLicense {
        LicenseID
        DriversLicenseType
        Category {
          category
          issueDate
          expiresAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tin
        tradeName
        firstName
        lastName
        fathersName
        birthDate
        gender
        email
        mobile
        postcode
        doy
        address
        familyStatus
        files {
          bucket
          region
          key
          name
        }
        driversLicense {
          LicenseID
          DriversLicenseType
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listCustomersByTradeName = /* GraphQL */ `
  query ListCustomersByTradeName(
    $tradeName: String
    $firstNameLastName: ModelCustomerByTradeNameCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomersByTradeName(
      tradeName: $tradeName
      firstNameLastName: $firstNameLastName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tin
        tradeName
        firstName
        lastName
        fathersName
        birthDate
        gender
        email
        mobile
        postcode
        doy
        address
        familyStatus
        files {
          bucket
          region
          key
          name
        }
        driversLicense {
          LicenseID
          DriversLicenseType
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTradeUserConnection = /* GraphQL */ `
  query GetTradeUserConnection($id: ID!) {
    getTradeUserConnection(id: $id) {
      id
      tradeId
      tradeName
      userId
      username
      pagePermissions
      modelPermissions
      employeeType
      preferences
      createdAt
      updatedAt
      trade {
        id
        tradeName
        ownerUsername
        address
        office_email
        zip_code
        mobile
        phone
        partnersNumberLimit
        employeesNumberLimit
        verified
        tin
        professionStartDate
        chamberRecordNumber
        insuranceLicenseExpirationDate
        civilLiabilityExpirationDate
        bankAccountInfo
        files {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
        officeContracts {
          nextToken
        }
        officeCustomers {
          nextToken
        }
        workforce {
          nextToken
        }
        companyConnections {
          nextToken
        }
      }
      user {
        id
        username
        email
        telephone
        surname
        name
        fathers_name
        address
        zip_code
        mobile
        tin
        family_name
        gender
        birthdate
        city
        profilePicture {
          bucket
          region
          key
          name
        }
        preferences
        locale
        files {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
        officeConnections {
          nextToken
        }
        callendarEvents {
          nextToken
        }
        requestsSentByMe {
          nextToken
        }
        requestsForMe {
          nextToken
        }
      }
    }
  }
`;
export const listTradeUserConnections = /* GraphQL */ `
  query ListTradeUserConnections(
    $filter: ModelTradeUserConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTradeUserConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tradeId
        tradeName
        userId
        username
        pagePermissions
        modelPermissions
        employeeType
        preferences
        createdAt
        updatedAt
        trade {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
        user {
          id
          username
          email
          telephone
          surname
          name
          fathers_name
          address
          zip_code
          mobile
          tin
          family_name
          gender
          birthdate
          city
          preferences
          locale
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listTradeUserConnectionsByTradeName = /* GraphQL */ `
  query ListTradeUserConnectionsByTradeName(
    $tradeName: String
    $userId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTradeUserConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTradeUserConnectionsByTradeName(
      tradeName: $tradeName
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tradeId
        tradeName
        userId
        username
        pagePermissions
        modelPermissions
        employeeType
        preferences
        createdAt
        updatedAt
        trade {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
        user {
          id
          username
          email
          telephone
          surname
          name
          fathers_name
          address
          zip_code
          mobile
          tin
          family_name
          gender
          birthdate
          city
          preferences
          locale
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listTradeUserConnectionsByEmployeeType = /* GraphQL */ `
  query ListTradeUserConnectionsByEmployeeType(
    $employeeType: EmployeeType
    $usernameTradeName: ModelTradeUserConnectionByEmployeeTypeCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTradeUserConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTradeUserConnectionsByEmployeeType(
      employeeType: $employeeType
      usernameTradeName: $usernameTradeName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tradeId
        tradeName
        userId
        username
        pagePermissions
        modelPermissions
        employeeType
        preferences
        createdAt
        updatedAt
        trade {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
        user {
          id
          username
          email
          telephone
          surname
          name
          fathers_name
          address
          zip_code
          mobile
          tin
          family_name
          gender
          birthdate
          city
          preferences
          locale
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listTradeUserConnectionsByUserId = /* GraphQL */ `
  query ListTradeUserConnectionsByUserId(
    $userId: ID
    $tradeName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTradeUserConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTradeUserConnectionsByUserId(
      userId: $userId
      tradeName: $tradeName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tradeId
        tradeName
        userId
        username
        pagePermissions
        modelPermissions
        employeeType
        preferences
        createdAt
        updatedAt
        trade {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
        user {
          id
          username
          email
          telephone
          surname
          name
          fathers_name
          address
          zip_code
          mobile
          tin
          family_name
          gender
          birthdate
          city
          preferences
          locale
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listTradeUserConnectionsByTradeAndUser = /* GraphQL */ `
  query ListTradeUserConnectionsByTradeAndUser(
    $tradeName: String
    $username: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTradeUserConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTradeUserConnectionsByTradeAndUser(
      tradeName: $tradeName
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tradeId
        tradeName
        userId
        username
        pagePermissions
        modelPermissions
        employeeType
        preferences
        createdAt
        updatedAt
        trade {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
        user {
          id
          username
          email
          telephone
          surname
          name
          fathers_name
          address
          zip_code
          mobile
          tin
          family_name
          gender
          birthdate
          city
          preferences
          locale
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listTradeUserConnectionsByUsername = /* GraphQL */ `
  query ListTradeUserConnectionsByUsername(
    $username: String
    $tradeName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTradeUserConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTradeUserConnectionsByUsername(
      username: $username
      tradeName: $tradeName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tradeId
        tradeName
        userId
        username
        pagePermissions
        modelPermissions
        employeeType
        preferences
        createdAt
        updatedAt
        trade {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
        user {
          id
          username
          email
          telephone
          surname
          name
          fathers_name
          address
          zip_code
          mobile
          tin
          family_name
          gender
          birthdate
          city
          preferences
          locale
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getTradeContractConnection = /* GraphQL */ `
  query GetTradeContractConnection($id: ID!) {
    getTradeContractConnection(id: $id) {
      id
      tradeId
      tradeName
      contractId
      ownsContract
      createdAt
      updatedAt
      trade {
        id
        tradeName
        ownerUsername
        address
        office_email
        zip_code
        mobile
        phone
        partnersNumberLimit
        employeesNumberLimit
        verified
        tin
        professionStartDate
        chamberRecordNumber
        insuranceLicenseExpirationDate
        civilLiabilityExpirationDate
        bankAccountInfo
        files {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
        officeContracts {
          nextToken
        }
        officeCustomers {
          nextToken
        }
        workforce {
          nextToken
        }
        companyConnections {
          nextToken
        }
      }
      contract {
        id
        contractId
        version
        vehicleNumberPlate
        vehicleId
        voucherId
        customerId
        tradeName
        second_tradeId
        contractorId
        co_name
        co_TRN
        contractState
        insuranceClass
        insuranceCoverage
        insuranceUsage
        duration
        startDate
        endDate
        data
        discount
        jointWorth
        netWorth
        driversLicense {
          LicenseID
          DriversLicenseType
        }
        createdAt
        updatedAt
        vehicle {
          id
          numberPlate
          officeId
          tradeName
          color
          manufacturer
          model
          vehicle_owner
          trim
          fuelType
          usage
          displacement
          eurotax
          firstRegistrationDate
          passengers
          purchaseDate
          taxableHorsepower
          vin
          value
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const listTradeContractConnections = /* GraphQL */ `
  query ListTradeContractConnections(
    $filter: ModelTradeContractConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTradeContractConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tradeId
        tradeName
        contractId
        ownsContract
        createdAt
        updatedAt
        trade {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
        contract {
          id
          contractId
          version
          vehicleNumberPlate
          vehicleId
          voucherId
          customerId
          tradeName
          second_tradeId
          contractorId
          co_name
          co_TRN
          contractState
          insuranceClass
          insuranceCoverage
          insuranceUsage
          duration
          startDate
          endDate
          data
          discount
          jointWorth
          netWorth
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listTradeContractConnectionByTradeId = /* GraphQL */ `
  query ListTradeContractConnectionByTradeId(
    $tradeId: ID
    $tradeName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTradeContractConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTradeContractConnectionByTradeId(
      tradeId: $tradeId
      tradeName: $tradeName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tradeId
        tradeName
        contractId
        ownsContract
        createdAt
        updatedAt
        trade {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
        contract {
          id
          contractId
          version
          vehicleNumberPlate
          vehicleId
          voucherId
          customerId
          tradeName
          second_tradeId
          contractorId
          co_name
          co_TRN
          contractState
          insuranceClass
          insuranceCoverage
          insuranceUsage
          duration
          startDate
          endDate
          data
          discount
          jointWorth
          netWorth
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listTradeContractConnectionByTradeName = /* GraphQL */ `
  query ListTradeContractConnectionByTradeName(
    $tradeName: String
    $tradeId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTradeContractConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTradeContractConnectionByTradeName(
      tradeName: $tradeName
      tradeId: $tradeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tradeId
        tradeName
        contractId
        ownsContract
        createdAt
        updatedAt
        trade {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
        contract {
          id
          contractId
          version
          vehicleNumberPlate
          vehicleId
          voucherId
          customerId
          tradeName
          second_tradeId
          contractorId
          co_name
          co_TRN
          contractState
          insuranceClass
          insuranceCoverage
          insuranceUsage
          duration
          startDate
          endDate
          data
          discount
          jointWorth
          netWorth
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listTradeContractConnectionByContractId = /* GraphQL */ `
  query ListTradeContractConnectionByContractId(
    $contractId: ID
    $tradeId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTradeContractConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTradeContractConnectionByContractId(
      contractId: $contractId
      tradeId: $tradeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tradeId
        tradeName
        contractId
        ownsContract
        createdAt
        updatedAt
        trade {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
        contract {
          id
          contractId
          version
          vehicleNumberPlate
          vehicleId
          voucherId
          customerId
          tradeName
          second_tradeId
          contractorId
          co_name
          co_TRN
          contractState
          insuranceClass
          insuranceCoverage
          insuranceUsage
          duration
          startDate
          endDate
          data
          discount
          jointWorth
          netWorth
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getCompanyAccessConnection = /* GraphQL */ `
  query GetCompanyAccessConnection($id: ID!) {
    getCompanyAccessConnection(id: $id) {
      id
      fromId
      fromTradeName
      toId
      toTradeName
      expirationDate
      message
      createdAt
      updatedAt
      from {
        id
        tradeName
        ownerUsername
        address
        office_email
        zip_code
        mobile
        phone
        partnersNumberLimit
        employeesNumberLimit
        verified
        tin
        professionStartDate
        chamberRecordNumber
        insuranceLicenseExpirationDate
        civilLiabilityExpirationDate
        bankAccountInfo
        files {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
        officeContracts {
          nextToken
        }
        officeCustomers {
          nextToken
        }
        workforce {
          nextToken
        }
        companyConnections {
          nextToken
        }
      }
      to {
        id
        tradeName
        ownerUsername
        address
        office_email
        zip_code
        mobile
        phone
        partnersNumberLimit
        employeesNumberLimit
        verified
        tin
        professionStartDate
        chamberRecordNumber
        insuranceLicenseExpirationDate
        civilLiabilityExpirationDate
        bankAccountInfo
        files {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
        officeContracts {
          nextToken
        }
        officeCustomers {
          nextToken
        }
        workforce {
          nextToken
        }
        companyConnections {
          nextToken
        }
      }
    }
  }
`;
export const listCompanyAccessConnections = /* GraphQL */ `
  query ListCompanyAccessConnections(
    $filter: ModelCompanyAccessConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyAccessConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fromId
        fromTradeName
        toId
        toTradeName
        expirationDate
        message
        createdAt
        updatedAt
        from {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
        to {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listCompanyAccessConnectionByFromId = /* GraphQL */ `
  query ListCompanyAccessConnectionByFromId(
    $fromId: ID
    $toId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyAccessConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyAccessConnectionByFromId(
      fromId: $fromId
      toId: $toId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fromId
        fromTradeName
        toId
        toTradeName
        expirationDate
        message
        createdAt
        updatedAt
        from {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
        to {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listCompanyAccessConnectionByToId = /* GraphQL */ `
  query ListCompanyAccessConnectionByToId(
    $toId: ID
    $fromId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyAccessConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyAccessConnectionByToId(
      toId: $toId
      fromId: $fromId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fromId
        fromTradeName
        toId
        toTradeName
        expirationDate
        message
        createdAt
        updatedAt
        from {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
        to {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listCompanyAccessConnectionByFromTradeName = /* GraphQL */ `
  query ListCompanyAccessConnectionByFromTradeName(
    $fromTradeName: String
    $toTradeName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyAccessConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyAccessConnectionByFromTradeName(
      fromTradeName: $fromTradeName
      toTradeName: $toTradeName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fromId
        fromTradeName
        toId
        toTradeName
        expirationDate
        message
        createdAt
        updatedAt
        from {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
        to {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listCompanyAccessConnectionByToTradeName = /* GraphQL */ `
  query ListCompanyAccessConnectionByToTradeName(
    $toTradeName: String
    $fromTradeName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyAccessConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyAccessConnectionByToTradeName(
      toTradeName: $toTradeName
      fromTradeName: $fromTradeName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fromId
        fromTradeName
        toId
        toTradeName
        expirationDate
        message
        createdAt
        updatedAt
        from {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
        to {
          id
          tradeName
          ownerUsername
          address
          office_email
          zip_code
          mobile
          phone
          partnersNumberLimit
          employeesNumberLimit
          verified
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getUserCalendarEvent = /* GraphQL */ `
  query GetUserCalendarEvent($id: ID!) {
    getUserCalendarEvent(id: $id) {
      id
      username
      payload
      createdAt
      updatedAt
    }
  }
`;
export const listUserCalendarEvents = /* GraphQL */ `
  query ListUserCalendarEvents(
    $filter: ModelUserCalendarEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCalendarEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        payload
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listUserCalendarEventsByUsername = /* GraphQL */ `
  query ListUserCalendarEventsByUsername(
    $username: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserCalendarEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCalendarEventsByUsername(
      username: $username
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        payload
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTransactionHistory = /* GraphQL */ `
  query GetTransactionHistory($id: ID!) {
    getTransactionHistory(id: $id) {
      id
      senderUserProfileId
      receiverUserProfileId
      timestamp
      senderUsername
      receiverUsername
      transactionAmount
      createdAt
      updatedAt
      sender {
        id
        username
        email
        telephone
        surname
        name
        fathers_name
        address
        zip_code
        mobile
        tin
        family_name
        gender
        birthdate
        city
        profilePicture {
          bucket
          region
          key
          name
        }
        preferences
        locale
        files {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
        officeConnections {
          nextToken
        }
        callendarEvents {
          nextToken
        }
        requestsSentByMe {
          nextToken
        }
        requestsForMe {
          nextToken
        }
      }
      receiver {
        id
        username
        email
        telephone
        surname
        name
        fathers_name
        address
        zip_code
        mobile
        tin
        family_name
        gender
        birthdate
        city
        profilePicture {
          bucket
          region
          key
          name
        }
        preferences
        locale
        files {
          bucket
          region
          key
          name
        }
        createdAt
        updatedAt
        officeConnections {
          nextToken
        }
        callendarEvents {
          nextToken
        }
        requestsSentByMe {
          nextToken
        }
        requestsForMe {
          nextToken
        }
      }
    }
  }
`;
export const listTransactionHistorys = /* GraphQL */ `
  query ListTransactionHistorys(
    $filter: ModelTransactionHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactionHistorys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        senderUserProfileId
        receiverUserProfileId
        timestamp
        senderUsername
        receiverUsername
        transactionAmount
        createdAt
        updatedAt
        sender {
          id
          username
          email
          telephone
          surname
          name
          fathers_name
          address
          zip_code
          mobile
          tin
          family_name
          gender
          birthdate
          city
          preferences
          locale
          createdAt
          updatedAt
        }
        receiver {
          id
          username
          email
          telephone
          surname
          name
          fathers_name
          address
          zip_code
          mobile
          tin
          family_name
          gender
          birthdate
          city
          preferences
          locale
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listTransactionHistorybySenderUsername = /* GraphQL */ `
  query ListTransactionHistorybySenderUsername(
    $senderUsername: String
    $timestampReceiverUsername: ModelTransactionHistoryBySenderUsernameCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactionHistorybySenderUsername(
      senderUsername: $senderUsername
      timestampReceiverUsername: $timestampReceiverUsername
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        senderUserProfileId
        receiverUserProfileId
        timestamp
        senderUsername
        receiverUsername
        transactionAmount
        createdAt
        updatedAt
        sender {
          id
          username
          email
          telephone
          surname
          name
          fathers_name
          address
          zip_code
          mobile
          tin
          family_name
          gender
          birthdate
          city
          preferences
          locale
          createdAt
          updatedAt
        }
        receiver {
          id
          username
          email
          telephone
          surname
          name
          fathers_name
          address
          zip_code
          mobile
          tin
          family_name
          gender
          birthdate
          city
          preferences
          locale
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listTransactionHistorybyReceiverUsername = /* GraphQL */ `
  query ListTransactionHistorybyReceiverUsername(
    $receiverUsername: String
    $timestampSenderUsername: ModelTransactionHistoryByReceiverUsernameCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactionHistorybyReceiverUsername(
      receiverUsername: $receiverUsername
      timestampSenderUsername: $timestampSenderUsername
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        senderUserProfileId
        receiverUserProfileId
        timestamp
        senderUsername
        receiverUsername
        transactionAmount
        createdAt
        updatedAt
        sender {
          id
          username
          email
          telephone
          surname
          name
          fathers_name
          address
          zip_code
          mobile
          tin
          family_name
          gender
          birthdate
          city
          preferences
          locale
          createdAt
          updatedAt
        }
        receiver {
          id
          username
          email
          telephone
          surname
          name
          fathers_name
          address
          zip_code
          mobile
          tin
          family_name
          gender
          birthdate
          city
          preferences
          locale
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getRequests = /* GraphQL */ `
  query GetRequests($id: ID!) {
    getRequests(id: $id) {
      id
      senderUsername
      senderEmail
      receiverUsername
      receiverEmail
      type
      payload {
        createTradePayload {
          tradeName
          address
          office_email
          zip_code
          mobile
          phone
          tin
          professionStartDate
          chamberRecordNumber
          insuranceLicenseExpirationDate
          civilLiabilityExpirationDate
          bankAccountInfo
        }
        createCompanyConnectionPayload {
          office_email
        }
        inviteEmployeeToOfficePayload {
          email
        }
        inviteContractorToOfficePayload {
          email
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRequestss = /* GraphQL */ `
  query ListRequestss(
    $filter: ModelRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequestss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        senderUsername
        senderEmail
        receiverUsername
        receiverEmail
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listRequestsBySenderEmail = /* GraphQL */ `
  query ListRequestsBySenderEmail(
    $senderEmail: String
    $sortDirection: ModelSortDirection
    $filter: ModelRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequestsBySenderEmail(
      senderEmail: $senderEmail
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        senderUsername
        senderEmail
        receiverUsername
        receiverEmail
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listRequestsByReceiverEmail = /* GraphQL */ `
  query ListRequestsByReceiverEmail(
    $receiverEmail: String
    $sortDirection: ModelSortDirection
    $filter: ModelRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequestsByReceiverEmail(
      receiverEmail: $receiverEmail
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        senderUsername
        senderEmail
        receiverUsername
        receiverEmail
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listRequestsBySenderUsername = /* GraphQL */ `
  query ListRequestsBySenderUsername(
    $senderUsername: String
    $sortDirection: ModelSortDirection
    $filter: ModelRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequestsBySenderUsername(
      senderUsername: $senderUsername
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        senderUsername
        senderEmail
        receiverUsername
        receiverEmail
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listRequestsByReceiverUsername = /* GraphQL */ `
  query ListRequestsByReceiverUsername(
    $receiverUsername: String
    $sortDirection: ModelSortDirection
    $filter: ModelRequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequestsByReceiverUsername(
      receiverUsername: $receiverUsername
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        senderUsername
        senderEmail
        receiverUsername
        receiverEmail
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
