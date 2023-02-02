import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { sleep } from "../../helpers/sleep";
import { Issue } from "../interfaces";

export const getIssueInformation = async (issueNumber: number): Promise<Issue> => {
    await sleep(2);
    const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);
    return data;

};

export const getIssueComments = async (issueNumber: number): Promise<Issue[]> => {
    await sleep(2);
    const { data } = await githubApi.get<Issue[]>(`/issues/${issueNumber}/comments`);
    return data;

};

export const useIssue = (issueNumber: number) => {
    
    const issueQuery = useQuery(["issue", issueNumber], () => getIssueInformation(issueNumber));
    const commentsQuery = useQuery(["issue", issueNumber, 'comments'], () => getIssueComments(issueQuery.data?.number!), {
        enabled: !!issueQuery.data
    });
    return {
        issueQuery,
        commentsQuery
    };
}
