import invariant from "tiny-invariant";
import {deleteContact} from "~/data";
import {ActionFunctionArgs, redirect} from "@remix-run/node";

export const action = async ({params}:ActionFunctionArgs) => {
    invariant(params.contactId, "Missing contactId param");
    await deleteContact(params.contactId);
    return redirect("/");
}
