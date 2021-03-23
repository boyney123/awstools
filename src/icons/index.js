import * as AWSDevTools from "../icons/Arch_Developer- Tools/32"
import * as Arch_Containers from "../icons/Arch_Containers/32"
import * as Arch_Database from "../icons/Arch_Database/32"
import * as Arch_Compute from "../icons/Arch_Compute/32"
import * as Arch_Mobile from "../icons/Arch_Mobile/32"
import * as Arch_Storage from "../icons/Arch_Storage/32"
import * as Arch_Analytics from "../icons/Arch_Analytics/Arch_32"
import * as Arch_Security_Identity_Compliance from "../icons/Arch_Security-Identity-Compliance/32"
import * as Arch_Networking_Content from "../icons/Arch_Networking-Content/32"
import * as Arch_Management_Governance from "../icons/Arch_Management-Governance/32"
import * as Arch_Developer_Tools from "../icons/Arch_Developer- Tools/32"

export const getIconForService = service => {
	switch (service) {
	case "cdk":
		return AWSDevTools.ArchAwsCloudDevelopmentKit32
	case "tools-and-sdk":
		return AWSDevTools.ArchAwsToolsAndSdk32
	case "dynamodb":
		return Arch_Database.ArchAmazonDynamoDb32
	case "iam":
		return Arch_Security_Identity_Compliance.ArchAwsIdentityAndAccessManagement32
	case "elastic-bean-stalk":
		return Arch_Compute.ArchAwsElasticBeanstalk32
	case "lambda":
		return Arch_Compute.ArchAwsLambda32
	case "observability":
		return Arch_Management_Governance.ArchAmazonCloudWatch32
	case "s3":
		return Arch_Storage.ArchAmazonS3Standard32
	case "tutorials":
		return Arch_Developer_Tools.ArchAwsToolsAndSdk32
	case "kinesis":
		return Arch_Analytics.ArchAmazonKinesis32
	case "cognito":
		return Arch_Security_Identity_Compliance.ArchAmazonCognito32
	case "cloudformation":
		return Arch_Management_Governance.ArchAwsCloudFormation32
	case "api-gateway":
		return Arch_Networking_Content.ArchAmazonApiGateway32
	case "appsync":
		return Arch_Mobile.ArchAwsAppSync32
	case "testing":
		return Arch_Developer_Tools.ArchAwsToolsAndSdk32
	case "sdk":
		return Arch_Developer_Tools.ArchAwsToolsAndSdk32
	case "cli":
		return Arch_Developer_Tools.ArchAwsCommandLineInterface32
	case "elastic-container-services":
		return Arch_Containers.ArchAmazonElasticContainerService32
	default:
		return Arch_Containers.ArchAmazonElasticContainerService32
	}
}
