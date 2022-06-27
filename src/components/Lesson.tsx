import { CheckCircle, Lock } from "phosphor-react";

import { format, isAfter } from "date-fns";

import ptBR from "date-fns/esm/locale/pt-BR/index.js";

import { Link, useParams } from "react-router-dom";

import classNames from "classnames";

export interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams();

  const isLessonActive = slug?.toString() === props.slug;

  console.log(slug, props.slug);

  const isLessonAvailable = isAfter(Date.now(), props.availableAt);
  const formatedDate = format(
    props.availableAt,
    "EEEE • d • 'de' MMMM • k:mm'h'",
    {
      locale: ptBR,
    }
  );
  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{formatedDate}</span>

      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500",
          {
            "bg-green-500": isLessonActive,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm font-medium flex items-center gap-2",
                {
                  "text-blue-500": !isLessonActive,
                  "text-white": isLessonActive,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span
              className={classNames(
                "text-sm font-medium flex items-center gap-2",
                {
                  "text-orange-500": !isLessonActive,
                  "text-white": isLessonActive,
                }
              )}
            >
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              "text-xs rounded px-2 py-[0.125rem] text-white border",
              {
                "border-green-300": !isLessonActive,
                "border-white": isLessonActive,
              }
            )}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong
          className={classNames("mt-5 block", {
            "text-white": isLessonActive,
            "text-gray-200": !isLessonActive,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
