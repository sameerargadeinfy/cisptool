let releaseList = [
  {
    crNumber: "CHG0342711",
    description: " Customer Service Platform - CSP Release 22.2 ",
    goLiveDate: "26-Feb-2022 ",
    state: "PENDING",
    lastValidation: "25-Jan-2022 17:52:06",
  },
  {
    crNumber: "CHG0335941",
    description: " Customer Service Platform - CSP Release 22.1 ",
    goLiveDate: "29-Jan-2022 ",
    state: "PENDING",
    lastValidation: "25-Jan-2022 17:52:06",
  },
  {
    crNumber: "CHG0325082",
    description: " Customer Service Platform - CSP Release 21.10 ",
    goLiveDate: "4-Dec-2021 ",
    state: "COMPLETE",
    lastValidation: "25-Jan-2022 17:52:06",
  },
];
export function getReleaseList() {
  return releaseList;
}

export function getRelease(number) {
  return releaseList.find((release) => release.crNumber === number);
}

let inScopeReleaseComponents = [
  {
    crNumber: "CHG0335941",
    releaseDetail: [
      {
        component: "BBD UI",
        location: "On-Prem",
        targetversion: "1.47.0-rc.6",
        SIT1Validation: "OK",
        propertyChanges: "NONE",
        flywayValidation: "N/A",
        notes: "",
      },
      {
        component: "BBD UI",
        location: "On-Prem",
        targetversion: "2.27.0-rc.7",
        SIT1Validation: "OK",
        propertyChanges: "NONE",
        flywayValidation: "N/A",
        notes: "",
      },
      {
        component: "BBD UI",
        location: "On-Prem",
        targetversion: "1.32.0-rc.1",
        SIT1Validation: "ERROR",
        propertyChanges: "NONE",
        flywayValidation: "N/A",
        notes: "",
      },
    ],
  },
  {
    crNumber: "CHG0342711",
    releaseDetail: [
      {
        component: "BBD UI",
        location: "On-Prem",
        targetversion: "1.47.0-rc.6",
        SIT1Validation: "OK",
        propertyChanges: "NONE",
        flywayValidation: "N/A",
        notes: "",
      },
      {
        component: "BBD UI",
        location: "On-Prem",
        targetversion: "2.27.0-rc.7",
        SIT1Validation: "OK",
        propertyChanges: "NONE",
        flywayValidation: "N/A",
        notes: "",
      },
      {
        component: "BBD UI",
        location: "On-Prem",
        targetversion: "1.32.0-rc.1",
        SIT1Validation: "ERROR",
        propertyChanges: "NONE",
        flywayValidation: "N/A",
        notes: "",
      },
    ],
  },
  {
    crNumber: "CHG0325082",
    releaseDetail: [
      {
        component: "BBD UI",
        location: "On-Prem",
        targetversion: "1.47.0-rc.6",
        SIT1Validation: "OK",
        propertyChanges: "NONE",
        flywayValidation: "N/A",
        notes: "",
      },
      {
        component: "BBD UI",
        location: "On-Prem",
        targetversion: "2.27.0-rc.7",
        SIT1Validation: "OK",
        propertyChanges: "NONE",
        flywayValidation: "N/A",
        notes: "",
      },
      {
        component: "BBD UI",
        location: "On-Prem",
        targetversion: "1.32.0-rc.1",
        SIT1Validation: "ERROR",
        propertyChanges: "NONE",
        flywayValidation: "N/A",
        notes: "",
      },
    ],
  },
];

export function getReleaseSummary(crNumber) {
  return inScopeReleaseComponents.find(
    (inScopeReleaseComponents) => inScopeReleaseComponents.crNumber === crNumber
  );
}

let outOfScopeReleaseComponents = [
  {
    crNumber: "CHG0335941",
    releaseDetail: [
      {
        component: "Address Service",
        location: "On-Prem",
        targetversion: "1.47.0-rc.6",
        SIT1Validation: "OK",
        notes: "",
      },
      {
        component: "Asset Finance Service",
        location: "On-Prem",
        targetversion: "2.27.0-rc.7",
        SIT1Validation: "OK",
        notes: "",
      },
    ],
  },
  {
    crNumber: "CHG0342711",
    releaseDetail: [
      {
        component: "Address Service",
        location: "On-Prem",
        targetversion: "1.47.0-rc.6",
        SIT1Validation: "OK",
        notes: "",
      },
      {
        component: "Asset Finance Service",
        location: "On-Prem",
        targetversion: "2.27.0-rc.7",
        SIT1Validation: "OK",
        notes: "",
      },
    ],
  },
  {
    crNumber: "CHG0325082",
    releaseDetail: [
      {
        component: "Address Service",
        location: "On-Prem",
        targetversion: "1.47.0-rc.6",
        SIT1Validation: "OK",
        notes: "",
      },
      {
        component: "Asset Finance Service",
        location: "On-Prem",
        targetversion: "2.27.0-rc.7",
        SIT1Validation: "OK",
        notes: "",
      },
    ],
  },
];
export function getOutofScopeSummary(crNumber) {
  return outOfScopeReleaseComponents.find(
    (outOfScopeReleaseComponents) =>
      outOfScopeReleaseComponents.crNumber === crNumber
  );
}
