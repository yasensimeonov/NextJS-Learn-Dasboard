'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ChangeEvent, useEffect, useRef } from "react";
import { debounce } from "lodash";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    function logInputToConsole(term: string) {
        console.log(term);
    }

    const debouncedSearch = debounce((term) => {
        logInputToConsole(term);
    }, 750);

    // DOES NOT WORK!!! Instead, use " const debounceVar = debounce((param) => { doSomething(param); }, 500); "
    // function debouncedSearchFunction(input: string) {
    //     debounce(() => {
    //         logInputToConsole(input);
    //     }, 750);
    // }

    // function handleChange(e: ChangeEvent<HTMLInputElement>) {
    //     // logInputToConsole(e.target.value);
    //
    //     debouncedSearch(e.target.value);
    // }

    function handleChangeGeneric(term: string) {
        debouncedSearchRef(term);
    }

    const debouncedSearchRef = useRef(
        debounce((term) => {
            logInputToConsole(term);

            const params = new URLSearchParams(searchParams);
            params.set('page', '1');
            if (term) {
                params.set('query', term);
            } else {
                params.delete('query');
            }
            replace(`${pathName}?${params.toString()}`);
        }, 750)
    ).current;

    // const test = () => SETUP CODE
    useEffect(() => {
        const cancelDebounce = () => {
            debouncedSearchRef.cancel();
        };

        return () => {
            cancelDebounce();
        };
    }, [debouncedSearchRef]);

    // // return () => CLEANUP CODE
    // useEffect(() => {
    //     return () => {
    //         debouncedSearchRef.cancel();
    //     };
    // }, [debouncedSearchRef]);

    return (
        <div className="relative flex flex-1 flex-shrink">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder={placeholder}
                // onChange={handleChange}
                onChange={(e) => {
                    handleChangeGeneric(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
    );
}
