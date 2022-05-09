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
        versions : {
          SIT1Version: "1.47.0-rc.6",
          prodVersion: "1.47.0-rc.6"
        },
        propertyChanges: "NONE",
        flywayValidation: "N/A",
        notes: "",
      },
      {
        component: "Process Orchestrator Service",
        location: "On-Prem",
        targetversion: "2.27.0-rc.7",
        SIT1Validation: "OK",
        versions : {
          SIT1Version: "2.27.0-rc.7",
          prodVersion: "2.27.0-rc.7"
        },
        propertyChanges: "NONE",
        flywayValidation: "N/A",
        notes: "",
      },
      {
        component: "Product Service v1",
        location: "On-Prem",
        targetversion: "1.32.0-rc.1",
        SIT1Validation: "ERROR",
        versions : {
          SIT1Version: "1.32.0-rc.1",
          prodVersion: "2.27.0-rc.7"
        },
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
        component: "Reference Service",
        location: "On-Prem",
        targetversion: "1.47.0-rc.6",
        SIT1Validation: "OK",
        versions : {
          SIT1Version: "1.47.0-rc.6",
          prodVersion: "1.47.0-rc.6"
        },
        propertyChanges: "NONE",
        flywayValidation: "N/A",
        notes: "",
      },
      {
        component: "Origination Service",
        location: "On-Prem",
        targetversion: "2.27.0-rc.7",
        SIT1Validation: "OK",
        versions : {
          SIT1Version: "2.27.0-rc.7",
          prodVersion: "2.27.0-rc.7"
        },
        propertyChanges: "NONE",
        flywayValidation: "N/A",
        notes: "",
      },
      {
        component: "Party Service",
        location: "On-Prem",
        targetversion: "1.32.0-rc.1",
        SIT1Validation: "ERROR",
        versions : {
          SIT1Version: "1.32.0-rc.1",
          prodVersion: "2.27.0-rc.7"
        },
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
        component: "UAM Service",
        location: "On-Prem",
        targetversion: "1.47.0-rc.6",
        SIT1Validation: "OK",
        versions : {
          SIT1Version: "1.47.0-rc.6",
          prodVersion: "1.47.0-rc.6"
        },
        propertyChanges: "NONE",
        flywayValidation: "N/A",
        notes: "",
      },
      {
        component: "Feature Toggle Service",
        location: "On-Prem",
        targetversion: "2.5.0-rc.3",
        SIT1Validation: "OK",
        versions : {
          SIT1Version: "2.5.0-rc.3",
          prodVersion: "2.5.0-rc.3"
        },
        propertyChanges: "NONE",
        flywayValidation: "ERROR",
        notes: " GCP flyway changes to align with on-prem changes already in Prod ",
      },
      {
        component: "SBOS Core Service",
        location: "On-Prem",
        targetversion: "2.10.0-rc.2",
        SIT1Validation: "ERROR",
        versions : {
          SIT1Version: "2.10.0-rc.2",
          prodVersion: "2.27.0-rc.7"
        },
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
        versions : {
          SIT1Version: "1.47.0-rc.6",
          prodVersion: "1.47.0-rc.6"
        },
        notes: "",
      },
      {
        component: "Asset Finance Service",
        location: "On-Prem",
        targetversion: "2.27.0-rc.7",
        SIT1Validation: "OK",
        versions : {
          SIT1Version: "2.27.0-rc.7",
          prodVersion: "2.27.0-rc.7"
        },
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
        versions : {
          SIT1Version: "1.47.0-rc.6",
          prodVersion: "1.47.0-rc.6"
        },
        notes: "",
      },
      {
        component: "Asset Finance Service",
        location: "On-Prem",
        targetversion: "2.27.0-rc.7",
        versions : {
          SIT1Version: "2.27.0-rc.7",
          prodVersion: "2.27.0-rc.7"
        },
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
        versions : {
          SIT1Version: "1.47.0-rc.6",
          prodVersion: "1.47.0-rc.6"
        },
        notes: "",
      },
      {
        component: "Asset Finance Service",
        location: "On-Prem",
        targetversion: "2.27.0-rc.7",
        versions : {
          SIT1Version: "2.27.0-rc.7",
          prodVersion: "2.27.0-rc.7"
        },
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
